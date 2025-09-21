"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { RefreshCw, ExternalLink, Smartphone, Tablet, Monitor, Code, Eye, AlertCircle } from "lucide-react"


export function LivePreview({ files }) {
  const [previewContent, setPreviewContent] = useState("")
  const [viewportSize, setViewportSize] = useState("desktop")
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [previewMode, setPreviewMode] = useState("preview")
  const [errors, setErrors] = useState([])
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const iframeRef = useRef(null)

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      generatePreview()
    }, 500) // Debounce preview updates

    return () => clearTimeout(debounceTimer)
  }, [files])

  const generatePreview = async () => {
    setIsRefreshing(true)
    setErrors([])

    try {
      // Get the main page content
      const pageContent = files["app/page.tsx"] || ""
      const layoutContent = files["app/layout.tsx"] || ""
      const cssContent = files["app/globals.css"] || ""

      // Enhanced JSX parsing with error handling
      let jsxContent = ""
      let pageTitle = "Preview"

      try {
        // Extract JSX content from the page component
        const jsxMatch = pageContent.match(/return\s*$$([\s\S]*?)$$;?\s*}/m)
        if (jsxMatch) {
          jsxContent = jsxMatch[1]
            .replace(/className=/g, "class=")
            .replace(/\{[^}]*\}/g, "") // Remove JSX expressions for now
            .trim()
        } else {
          // Fallback: try to extract JSX without parentheses
          const fallbackMatch = pageContent.match(/return\s*([\s\S]*?);?\s*}/m)
          if (fallbackMatch) {
            jsxContent = fallbackMatch[1].replace(/className=/g, "class=").trim()
          }
        }

        // Extract title from layout if available
        const titleMatch = layoutContent.match(/<title>(.*?)<\/title>/i)
        if (titleMatch) {
          pageTitle = titleMatch[1]
        }
      } catch (error) {
        setErrors([{ message: "Failed to parse JSX content", file: "app/page.tsx" }])
      }

      // Enhanced CSS processing
      let processedCSS = cssContent
      if (cssContent.includes("@tailwind")) {
        // Keep Tailwind directives for CDN
        processedCSS = cssContent
      }

      // Create enhanced HTML preview with better error handling
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${pageTitle}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <script>
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'slate': {
                      50: '#f8fafc',
                      100: '#f1f5f9',
                      200: '#e2e8f0',
                      300: '#cbd5e1',
                      400: '#94a3b8',
                      500: '#64748b',
                      600: '#475569',
                      700: '#334155',
                      800: '#1e293b',
                      900: '#0f172a',
                    }
                  }
                }
              }
            }
          </script>
          <style>
            ${processedCSS}
            body { margin: 0; padding: 0; }
            * { box-sizing: border-box; }
            
            /* Custom scrollbar for better preview */
            ::-webkit-scrollbar {
              width: 8px;
            }
            ::-webkit-scrollbar-track {
              background: #1e293b;
            }
            ::-webkit-scrollbar-thumb {
              background: #475569;
              border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: #64748b;
            }
          </style>
        </head>
        <body>
          <div id="root">
            ${jsxContent || '<div class="min-h-screen flex items-center justify-center bg-slate-100"><p class="text-slate-500">No content to preview</p></div>'}
          </div>
          
          <script>
            // Enhanced error handling
            window.addEventListener('error', function(e) {
              console.error('Preview Error:', e.error);
              parent.postMessage({
                type: 'preview-error',
                message: e.error.message,
                line: e.lineno,
                file: e.filename
              }, '*');
            });
            
            // Send ready message
            parent.postMessage({ type: 'preview-ready' }, '*');
          </script>
        </body>
        </html>
      `

      setPreviewContent(html)
      setLastUpdated(new Date())
    } catch (error) {
      console.error("Preview generation error:", error)
      setErrors([{ message: "Failed to generate preview" }])
    } finally {
      setIsRefreshing(false)
    }
  }

  // Listen for messages from iframe
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "preview-error") {
        setErrors((prev) => [
          ...prev,
          {
            message: event.data.message,
            line: event.data.line,
            file: event.data.file,
          },
        ])
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  const getViewportClass = () => {
    switch (viewportSize) {
      case "mobile":
        return "w-[375px] h-[667px]"
      case "tablet":
        return "w-[768px] h-[1024px]"
      default:
        return "w-full h-full"
    }
  }

  const getViewportIcon = (size) => {
    switch (size) {
      case "mobile":
        return <Smartphone className="w-4 h-4" />
      case "tablet":
        return <Tablet className="w-4 h-4" />
      default:
        return <Monitor className="w-4 h-4" />
    }
  }

  const openInNewTab = () => {
    const blob = new Blob([previewContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    window.open(url, "_blank")
  }

  return (
    <div className="h-full flex flex-col bg-slate-900">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-800/50">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-slate-200">Live Preview</h3>
          <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
            Live
          </Badge>
          {errors.length > 0 && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="border-red-500/30 text-red-400 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.length} Error{errors.length > 1 ? "s" : ""}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-800 border-slate-700 text-white max-w-sm">
                  <div className="space-y-1">
                    {errors.map((error, index) => (
                      <div key={index} className="text-xs">
                        <span className="text-red-400">{error.message}</span>
                        {error.file && <span className="text-slate-400"> in {error.file}</span>}
                        {error.line && <span className="text-slate-400"> (line {error.line})</span>}
                      </div>
                    ))}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Preview/Code Toggle */}
          <div className="flex items-center gap-1 bg-slate-800 rounded-lg p-1">
            <Button
              variant={previewMode === "preview" ? "default" : "ghost"}
              size="sm"
              className={`h-7 px-3 text-xs ${
                previewMode === "preview"
                  ? "bg-cyan-500 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
              onClick={() => setPreviewMode("preview")}
            >
              <Eye className="w-3 h-3 mr-1" />
              Preview
            </Button>
            <Button
              variant={previewMode === "code" ? "default" : "ghost"}
              size="sm"
              className={`h-7 px-3 text-xs ${
                previewMode === "code" ? "bg-cyan-500 text-white" : "text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
              onClick={() => setPreviewMode("code")}
            >
              <Code className="w-3 h-3 mr-1" />
              Code
            </Button>
          </div>

          {/* Viewport Size Controls */}
          <div className="flex items-center gap-1 bg-slate-800 rounded-lg p-1">
            {(["mobile", "tablet", "desktop"]).map((size) => (
              <TooltipProvider key={size}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={viewportSize === size ? "default" : "ghost"}
                      size="sm"
                      className={`h-7 w-7 p-0 ${
                        viewportSize === size
                          ? "bg-cyan-500 text-white"
                          : "text-slate-400 hover:text-white hover:bg-slate-700"
                      }`}
                      onClick={() => setViewportSize(size)}
                    >
                      {getViewportIcon(size)}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-800 border-slate-700 text-white">
                    <p className="capitalize">{size} view</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={generatePreview}
                  disabled={isRefreshing}
                  className="h-7 w-7 p-0 text-slate-400 hover:text-white"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-slate-800 border-slate-700 text-white">
                <p>Refresh preview</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={openInNewTab}
                  className="h-7 w-7 p-0 text-slate-400 hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-slate-800 border-slate-700 text-white">
                <p>Open in new tab</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="flex-1 p-4 bg-slate-800/20">
        {previewMode === "preview" ? (
          <div
            className={`mx-auto bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${getViewportClass()}`}
          >
            {previewContent ? (
              <iframe
                ref={iframeRef}
                srcDoc={previewContent}
                className="w-full h-full border-0"
                title="Live Preview"
                sandbox="allow-scripts allow-same-origin"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-100">
                <div className="text-center text-slate-500">
                  <Monitor className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Preview will appear here</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-full bg-slate-800 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-slate-700">
              <h4 className="text-sm font-medium text-slate-200">Generated HTML</h4>
              <p className="text-xs text-slate-400 mt-1">Last updated: {lastUpdated.toLocaleTimeString()}</p>
            </div>
            <div className="p-4 overflow-auto h-full">
              <pre className="text-xs text-slate-300 font-mono whitespace-pre-wrap">{previewContent}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
