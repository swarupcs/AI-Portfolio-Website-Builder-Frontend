import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Folder, FolderOpen, Plus, Trash2, ChevronRight, ChevronDown } from "lucide-react"



export function FileExplorer({ files, activeFile, onFileSelect, onFileCreate, onFileDelete }) {
  const [expandedFolders, setExpandedFolders] = useState(new Set(["app", "components"]))
  const [newFileDialogOpen, setNewFileDialogOpen] = useState(false)
  const [newFileName, setNewFileName] = useState("")

  // Build file tree from flat file list
  const buildFileTree = (files) => {
    const tree= []
    const folderMap = new Map()

    // Sort files to ensure folders come before files
    const sortedPaths = Object.keys(files).sort()

    for (const filePath of sortedPaths) {
      const parts = filePath.split("/")
      let currentPath = ""

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i]
        const parentPath = currentPath
        currentPath = currentPath ? `${currentPath}/${part}` : part

        if (i === parts.length - 1) {
          // This is a file
          const fileNode = {
            name: part,
            path: filePath,
            type: "file",
          }

          if (parentPath) {
            const parentFolder = folderMap.get(parentPath)
            if (parentFolder) {
              parentFolder.children = parentFolder.children || []
              parentFolder.children.push(fileNode)
            }
          } else {
            tree.push(fileNode)
          }
        } else {
          // This is a folder
          if (!folderMap.has(currentPath)) {
            const folderNode= {
              name: part,
              path: currentPath,
              type: "folder",
              children: [],
            }

            folderMap.set(currentPath, folderNode)

            if (parentPath) {
              const parentFolder = folderMap.get(parentPath)
              if (parentFolder) {
                parentFolder.children = parentFolder.children || []
                parentFolder.children.push(folderNode)
              }
            } else {
              tree.push(folderNode)
            }
          }
        }
      }
    }

    return tree
  }

  const toggleFolder = (folderPath) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folderPath)) {
      newExpanded.delete(folderPath)
    } else {
      newExpanded.add(folderPath)
    }
    setExpandedFolders(newExpanded)
  }

  const getFileIcon = (fileName) => {
    const ext = fileName.split(".").pop()?.toLowerCase()
    switch (ext) {
      case "tsx":
      case "jsx":
        return "⚛️"
      case "ts":
      case "js":
        return "📜"
      case "css":
        return "🎨"
      case "json":
        return "📋"
      case "md":
        return "📝"
      default:
        return "📄"
    }
  }

  const handleCreateFile = () => {
    if (!newFileName.trim()) return
    onFileCreate(newFileName.trim())
    setNewFileName("")
    setNewFileDialogOpen(false)
  }

  const renderFileNode = (node, depth = 0) => {
    const isExpanded = expandedFolders.has(node.path)
    const isActive = node.type === "file" && node.path === activeFile

    return (
      <div key={node.path}>
        <ContextMenu>
          <ContextMenuTrigger>
            <div
              className={`flex items-center gap-2 px-2 py-1 text-sm cursor-pointer hover:bg-slate-800/50 rounded ${
                isActive ? "bg-cyan-500/20 text-cyan-400" : "text-slate-300"
              }`}
              style={{ paddingLeft: `${depth * 16 + 8}px` }}
              onClick={() => {
                if (node.type === "folder") {
                  toggleFolder(node.path)
                } else {
                  onFileSelect(node.path)
                }
              }}
            >
              {node.type === "folder" ? (
                <>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                  {isExpanded ? (
                    <FolderOpen className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Folder className="w-4 h-4 text-blue-400" />
                  )}
                </>
              ) : (
                <>
                  <span className="w-4 text-center">{getFileIcon(node.name)}</span>
                </>
              )}
              <span className="truncate">{node.name}</span>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="bg-slate-800 border-slate-700">
            {node.type === "file" && (
              <ContextMenuItem
                onClick={() => onFileDelete(node.path)}
                className="text-red-400 focus:bg-red-500/10 focus:text-red-400"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </ContextMenuItem>
            )}
          </ContextMenuContent>
        </ContextMenu>

        {node.type === "folder" && isExpanded && node.children && (
          <div>{node.children.map((child) => renderFileNode(child, depth + 1))}</div>
        )}
      </div>
    )
  }

  const fileTree = buildFileTree(files)

  return (
    <div className="h-48 bg-slate-900 border-b border-slate-800 flex flex-col">
      <div className="flex items-center justify-between p-3 border-b border-slate-800">
        <h3 className="text-sm font-medium text-slate-200">Files</h3>
        <Dialog open={newFileDialogOpen} onOpenChange={setNewFileDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-slate-400 hover:text-white">
              <Plus className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-800 border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-white">Create New File</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fileName" className="text-slate-200">
                  File Name
                </Label>
                <Input
                  id="fileName"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  placeholder="components/Header.tsx"
                  className="bg-slate-700 border-slate-600 text-white"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleCreateFile()
                    }
                  }}
                />
              </div>
              <Button
                onClick={handleCreateFile}
                className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600"
                disabled={!newFileName.trim()}
              >
                Create File
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">{fileTree.map((node) => renderFileNode(node))}</div>
      </ScrollArea>
    </div>
  )
}
