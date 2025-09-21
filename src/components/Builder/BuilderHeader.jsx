import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Save, Globe, ArrowLeft, Settings } from "lucide-react"
import { Link } from "react-router-dom"




export function BuilderHeader({ project, onSave, onPublish }) {
  const [saveDialogOpen, setSaveDialogOpen] = useState(false)
  const [projectName, setProjectName] = useState(project?.name || "")
  const [projectDescription, setProjectDescription] = useState(project?.description || "")

  const handleSave = () => {
    if (!projectName.trim()) return
    onSave(projectName, projectDescription)
    setSaveDialogOpen(false)
  }

  return (
    <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard" className="text-slate-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <h1 className="text-lg font-semibold text-white">{project?.name || "New Project"}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                <Save className="w-4 h-4 mr-2" />
                {project ? "Update" : "Save"}
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-white">{project ? "Update Project" : "Save Project"}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-slate-200">
                    Project Name
                  </Label>
                  <Input
                    id="name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="My Portfolio Website"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-slate-200">
                    Description (Optional)
                  </Label>
                  <Textarea
                    id="description"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="A beautiful portfolio website..."
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <Button
                  onClick={handleSave}
                  className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600"
                  disabled={!projectName.trim()}
                >
                  {project ? "Update Project" : "Save Project"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {project && (
            <Button
              onClick={onPublish}
              size="sm"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
            >
              <Globe className="w-4 h-4 mr-2" />
              {project.is_published ? "Published" : "Publish"}
            </Button>
          )}

          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
