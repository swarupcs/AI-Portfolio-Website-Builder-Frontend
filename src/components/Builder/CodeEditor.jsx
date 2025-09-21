import { useEffect, useRef } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
// Import FileText icon
import { FileText } from "lucide-react"


export function CodeEditor({ file, content, onChange }) {
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [file])

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault()
      const textarea = e.currentTarget
      const start = textarea.selectionStart
      const end = textarea.selectionEnd

      // Insert tab character
      const newContent = content.substring(0, start) + "  " + content.substring(end)
      onChange(newContent)

      // Move cursor
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2
      }, 0)
    }
  }

  const getLanguageFromFile = (fileName) => {
    const ext = fileName.split(".").pop()?.toLowerCase()
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
      case "json":
        return "json"
      case "md":
        return "markdown"
      default:
        return "text"
    }
  }

  const addLineNumbers = (content) => {
    const lines = content.split("\n")
    return lines.map((_, index) => index + 1).join("\n")
  }

  if (!file) {
    return (
      <div className="flex-1 flex items-center justify-center bg-slate-900 text-slate-400">
        <div className="text-center">
          <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Select a file to start editing</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col bg-slate-900">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-800/50">
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-400">📄</span>
          <span className="text-sm text-slate-200 font-medium">{file}</span>
          <span className="text-xs text-slate-500 bg-slate-700 px-2 py-1 rounded">{getLanguageFromFile(file)}</span>
        </div>
        <div className="text-xs text-slate-500">{content.split("\n").length} lines</div>
      </div>

      <div className="flex-1 flex">
        {/* Line Numbers */}
        <div className="w-12 bg-slate-800/30 border-r border-slate-800 flex-shrink-0">
          <ScrollArea className="h-full">
            <pre className="text-xs text-slate-500 p-2 font-mono leading-6 text-right">{addLineNumbers(content)}</pre>
          </ScrollArea>
        </div>

        {/* Code Editor */}
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full h-full p-4 bg-transparent text-slate-200 font-mono text-sm leading-6 resize-none outline-none"
            placeholder={`Start editing ${file}...`}
            spellCheck={false}
            style={{
              tabSize: 2,
            }}
          />
        </div>
      </div>
    </div>
  )
}


