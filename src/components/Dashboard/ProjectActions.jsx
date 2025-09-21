import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "sonner"
import { Copy, Trash2, Edit, ExternalLink, Download } from "lucide-react"
import { useNavigate } from "react-router-dom"



export function ProjectActions({ project, onProjectUpdate }) {
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [projectName, setProjectName] = useState(project.name)
  const [projectDescription, setProjectDescription] = useState(project.description || "")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleUpdateProject = async () => {
    if (!projectName.trim()) return

    setIsLoading(true)
    try {
    //   const { error } = await supabase
    //     .from("projects")
    //     .update({
    //       name: projectName,
    //       description: projectDescription,
    //       updated_at: new Date().toISOString(),
    //     })
    //     .eq("id", project.id)

    //   if (error) throw error

      toast.success("Project updated successfully!")
      setEditDialogOpen(false)
      onProjectUpdate()
    } catch (error) {
      console.error("Error updating project:", error)
      toast.error("Failed to update project")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDuplicateProject = async () => {
    setIsLoading(true)
    try {
    //   const { data, error } = await supabase
    //     .from("projects")
    //     .insert({
    //       user_id: project.user_id,
    //       name: `${project.name} (Copy)`,
    //       description: project.description,
    //       template_type: project.template_type,
    //       files: project.files,
    //     })
    //     .select()
    //     .single()

    //   if (error) throw error

      toast.success("Project duplicated successfully!")
      onProjectUpdate()
    } catch (error) {
      console.error("Error duplicating project:", error)
      toast.error("Failed to duplicate project")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteProject = async () => {
    setIsLoading(true)
    try {
    //   const { error } = await supabase.from("projects").delete().eq("id", project.id)

    //   if (error) throw error

      toast.success("Project deleted successfully!")
      onProjectUpdate()
    } catch (error) {
      console.error("Error deleting project:", error)
      toast.error("Failed to delete project")
    } finally {
      setIsLoading(false)
    }
  }

  const handlePublishToggle = async () => {
    setIsLoading(true)
    try {
    //   const { error } = await supabase
    //     .from("projects")
    //     .update({
    //       is_published: !project.is_published,
    //       published_url: !project.is_published ? `https://${project.id}.portfolio-ai.app` : null,
    //       updated_at: new Date().toISOString(),
    //     })
    //     .eq("id", project.id)

    //   if (error) throw error

      toast.success(project.is_published ? "Project unpublished!" : "Project published successfully!")
      onProjectUpdate()
    } catch (error) {
      console.error("Error toggling publish status:", error)
      toast.error("Failed to update publish status")
    } finally {
      setIsLoading(false)
    }
  }

  const handleExportProject = () => {
    const projectData = {
      name: project.name,
      description: project.description,
      files: project.files,
      template_type: project.template_type,
      created_at: project.created_at,
    }

    const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${project.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast.success("Project exported successfully!")
  }

  return (
    <div className="flex items-center gap-2">
      {/* Edit Project */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
            <Edit className="w-4 h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-slate-800 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white">Edit Project</DialogTitle>
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
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="description" className="text-slate-200">
                Description
              </Label>
              <Textarea
                id="description"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleUpdateProject}
                disabled={!projectName.trim() || isLoading}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600"
              >
                {isLoading ? "Updating..." : "Update Project"}
              </Button>
              <Button
                variant="outline"
                onClick={() => setEditDialogOpen(false)}
                className="border-slate-600 text-slate-300"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Duplicate Project */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleDuplicateProject}
        disabled={isLoading}
        className="text-slate-400 hover:text-white"
      >
        <Copy className="w-4 h-4" />
      </Button>

      {/* Export Project */}
      <Button variant="ghost" size="sm" onClick={handleExportProject} className="text-slate-400 hover:text-white">
        <Download className="w-4 h-4" />
      </Button>

      {/* Publish/Unpublish */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handlePublishToggle}
        disabled={isLoading}
        className={project.is_published ? "text-green-400 hover:text-green-300" : "text-slate-400 hover:text-white"}
      >
        <ExternalLink className="w-4 h-4" />
      </Button>

      {/* Delete Project */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
            <Trash2 className="w-4 h-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-slate-800 border-slate-700">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Delete Project</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-400">
              Are you sure you want to delete "{project.name}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteProject}
              disabled={isLoading}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {isLoading ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
