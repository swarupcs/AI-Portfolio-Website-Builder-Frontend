import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Eye, Copy, Download, ExternalLink, FileText, Folder, FolderOpen } from "lucide-react"




function MonacoEditor({
  value,
  language,
  onChange,
}) {
  const [monaco, setMonaco] = useState(null)
  const [editor, setEditor] = useState(null)

  useEffect(() => {
    // Load Monaco Editor
    const script = document.createElement("script")
    script.src = "https://unpkg.com/monaco-editor@0.44.0/min/vs/loader.js"
    script.onload = () => {
      // @ts-ignore
      window.require.config({ paths: { vs: "https://unpkg.com/monaco-editor@0.44.0/min/vs" } })
      // @ts-ignore
      window.require(["vs/editor/editor.main"], (monaco) => {
        setMonaco(monaco)
      })
    }
    document.head.appendChild(script)

    return () => {
      if (editor) {
        editor.dispose()
      }
    }
  }, [])

  useEffect(() => {
    if (monaco && !editor) {
      const editorInstance = monaco.editor.create(document.getElementById("monaco-editor"), {
        value: value,
        language: language,
        theme: "vs-dark",
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        readOnly: !onChange,
        wordWrap: "on",
        lineNumbers: "on",
        folding: true,
        renderWhitespace: "selection",
        contextmenu: true,
        selectOnLineNumbers: true,
        roundedSelection: false,
        cursorStyle: "line",
        cursorBlinking: "blink",
        smoothScrolling: true,
      })

      if (onChange) {
        editorInstance.onDidChangeModelContent(() => {
          onChange(editorInstance.getValue())
        })
      }

      setEditor(editorInstance)
    }
  }, [monaco, value, language, onChange])

  useEffect(() => {
    if (editor && value !== editor.getValue()) {
      editor.setValue(value)
    }
  }, [editor, value])

  return <div id="monaco-editor" style={{ height: "500px", width: "100%" }} />
}

export function ProjectViewerPage({ project, onBack }) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
  const [activeFile, setActiveFile] = useState(() => {
    if (project.framework === "nextjs" && project.files) {
      return Object.keys(project.files)[0] || "app/page.tsx"
    }
    return "index.html"
  })
  const [copied, setCopied] = useState(false)
  const [expandedFolders, setExpandedFolders] = useState(
    new Set(["app", "components", "css", "js", "assets"]),
  )

  const copyCode = async () => {
    const codeToCopy =  project.framework === "nextjs" && project.files ? project.files[activeFile] || project.code : project.code
    await navigator.clipboard.writeText(codeToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const generateNextjsPreview = () => {
    if (project.framework !== "nextjs" || !project.files) return project.previewUrl

    const previewHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Chen - Software Engineer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { margin: 0; padding: 0; }
    </style>
</head>
<body>
    <div class="min-h-screen bg-gray-50">
        <header class="bg-slate-800 text-white py-16 text-center">
            <div class="container mx-auto px-4">
                <h1 class="text-5xl font-bold mb-4">Alex Chen</h1>
                <p class="text-xl opacity-90">Senior Software Engineer</p>
            </div>
        </header>
        <main class="container mx-auto px-4 py-8 max-w-4xl">
            <section class="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 class="text-3xl font-bold text-slate-800 border-b-2 border-blue-500 pb-4 mb-6">About</h2>
                <p class="text-gray-700 leading-relaxed">
                    Passionate software engineer with 5+ years of experience building scalable web applications 
                    and leading development teams. Expertise in full-stack development with a focus on modern 
                    JavaScript frameworks and cloud technologies.
                </p>
            </section>
            <section class="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 class="text-3xl font-bold text-slate-800 border-b-2 border-blue-500 pb-4 mb-6">Skills</h2>
                <div class="flex flex-wrap gap-3">
                    <span class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
                    <span class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">React</span>
                    <span class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
                    <span class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">Python</span>
                    <span class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">AWS</span>
                    <span class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">Docker</span>
                    <span class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">MongoDB</span>
                    <span class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">PostgreSQL</span>
                </div>
            </section>
            <section class="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 class="text-3xl font-bold text-slate-800 border-b-2 border-blue-500 pb-4 mb-6">Experience</h2>
                <div class="space-y-8">
                    <div>
                        <h3 class="text-xl font-semibold text-slate-800 mb-2">Senior Software Engineer</h3>
                        <p class="text-gray-600 italic mb-4">TechCorp Inc. | 2021 - Present</p>
                        <ul class="list-disc list-inside space-y-2 text-gray-700">
                            <li>Led development of microservices architecture serving 1M+ users</li>
                            <li>Mentored junior developers and conducted code reviews</li>
                            <li>Improved application performance by 40% through optimization</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-slate-800 mb-2">Full Stack Developer</h3>
                        <p class="text-gray-600 italic mb-4">StartupXYZ | 2019 - 2021</p>
                        <ul class="list-disc list-inside space-y-2 text-gray-700">
                            <li>Built responsive web applications using React and Node.js</li>
                            <li>Implemented CI/CD pipelines and automated testing</li>
                            <li>Collaborated with design team to create user-friendly interfaces</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="bg-gray-100 rounded-lg p-8">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <h3 class="font-semibold text-slate-800 mb-2">Email</h3>
                        <p class="text-gray-600 text-sm">alex.chen@email.com</p>
                    </div>
                    <div>
                        <h3 class="font-semibold text-slate-800 mb-2">Phone</h3>
                        <p class="text-gray-600 text-sm">(555) 123-4567</p>
                    </div>
                    <div>
                        <h3 class="font-semibold text-slate-800 mb-2">LinkedIn</h3>
                        <p class="text-gray-600 text-sm">linkedin.com/in/alexchen</p>
                    </div>
                    <div>
                        <h3 class="font-semibold text-slate-800 mb-2">GitHub</h3>
                        <p class="text-gray-600 text-sm">github.com/alexchen</p>
                    </div>
                </div>
            </section>
        </main>
    </div>
</body>
</html>`

    return "data:text/html;base64," + btoa(previewHtml)
  }

  const organizeFiles = (files) => {
    const tree= {}

    Object.keys(files).forEach((filepath) => {
      const parts = filepath.split("/")
      let current = tree

      parts.forEach((part, index) => {
        if (index === parts.length - 1) {
          // It's a file
          current[part] = { type: "file", path: filepath }
        } else {
          // It's a folder
          if (!current[part]) {
            current[part] = { type: "folder", children: {} }
          }
          current = current[part].children
        }
      })
    })

    return tree
  }

  const renderFileTree = (tree, path = "") => {
    return Object.keys(tree).map((key) => {
      const item = tree[key]
      const fullPath = path ? `${path}/${key}` : key

      if (item.type === "file") {
        return (
          <button
            key={item.path}
            onClick={() => setActiveFile(item.path)}
            className={`w-full text-left px-3 py-2 rounded text-sm transition-colors flex items-center space-x-2 ml-4 ${
              activeFile === item.path
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{key}</span>
          </button>
        )
      } else {
        const isExpanded = expandedFolders.has(fullPath)
        return (
          <div key={fullPath}>
            <button
              onClick={() => {
                const newExpanded = new Set(expandedFolders)
                if (isExpanded) {
                  newExpanded.delete(fullPath)
                } else {
                  newExpanded.add(fullPath)
                }
                setExpandedFolders(newExpanded)
              }}
              className="w-full text-left px-3 py-2 rounded text-sm transition-colors flex items-center space-x-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            >
              {isExpanded ? <FolderOpen className="w-4 h-4" /> : <Folder className="w-4 h-4" />}
              <span>{key}</span>
            </button>
            {isExpanded && <div className="ml-2">{renderFileTree(item.children, fullPath)}</div>}
          </div>
        )
      }
    })
  }

  const getLanguageFromFile = (filename) => {
    const ext = filename.split(".").pop()?.toLowerCase()
    switch (ext) {
      case "tsx":
      case "jsx":
        return "typescript"
      case "ts":
        return "typescript"
      case "js":
        return "javascript"
      case "css":
        return "css"
      case "html":
        return "html"
      case "json":
        return "json"
      default:
        return "plaintext"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div className="h-6 w-px bg-border" />
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-xl font-semibold text-foreground">{project.name}</h1>
                  {project.framework === "nextjs" && (
                    <Badge variant="outline" className="bg-black text-white border-black">
                      Next.js
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant={project.status === "Published" ? "default" : "secondary"} className="text-xs">
                    {project.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {project.views} views • {project.lastModified}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("preview")}
              className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "preview"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="w-4 h-4 inline mr-2" />
              Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "code"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Code
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        {activeTab === "preview" ? (
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Live Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border border-border rounded-lg overflow-hidden bg-white">
                <iframe
                  src={project.framework === "nextjs" ? generateNextjsPreview() : project.previewUrl}
                  className="w-full h-[600px] border-0"
                  title={`Preview of ${project.name}`}
                />
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {project.files && (
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-foreground text-sm">Project Files</CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-1">{renderFileTree(organizeFiles(project.files))}</div>
                </CardContent>
              </Card>
            )}

            <Card className={`bg-card/50 border-border ${project.files ? "lg:col-span-3" : "lg:col-span-4"}`}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-foreground">
                  {project.files ? `Source Code - ${activeFile}` : "Source Code"}
                </CardTitle>
                <Button variant="outline" size="sm" onClick={copyCode}>
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? "Copied!" : "Copy Code"}
                </Button>
              </CardHeader>
              <CardContent>
                <div className="border border-border rounded-lg overflow-hidden">
                  <MonacoEditor
                    value={project.files ? project.files[activeFile] || project.code : project.code}
                    language={project.files ? getLanguageFromFile(activeFile) : "html"}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
