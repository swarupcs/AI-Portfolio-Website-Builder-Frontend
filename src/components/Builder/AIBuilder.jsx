
import { useState, useEffect } from "react"

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { BuilderHeader } from "./BuilderHeader"
import { FileExplorer } from "./FileExplorer"
import { CodeEditor } from "./CodeEditor"
import { LivePreview } from "./LivePreview"
import { ChatInterface } from "./ChatInterface"


export function AIBuilder({ user, project }) {
  const [currentProject, setCurrentProject] = useState(project)
  const [files, setFiles] = useState(project?.files || {})
  const [activeFile, setActiveFile] = useState("app/page.tsx")
  const [isGenerating, setIsGenerating] = useState(false)
  const [chatMessages, setChatMessages] = useState([])


const navigate = useNavigate();
  // Initialize default files if new project
  useEffect(() => {
    if (!project && Object.keys(files).length === 0) {
      setFiles({
        "app/page.tsx": `export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
        <p className="text-slate-400">Tell the AI what you'd like to build!</p>
      </div>
    </div>
  )
}`,
        "app/layout.tsx": `import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`,
        "app/globals.css": `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  padding: 0;
}`,
      })
    }
  }, [project, files])

  const handleSaveProject = async (name, description) => {
    try {
      if (currentProject) {
        // Update existing project
        // const { error } = await supabase
        //   .from("projects")
        //   .update({
        //     name,
        //     description,
        //     files,
        //     updated_at: new Date().toISOString(),
        //   })
        //   .eq("id", currentProject.id)

        // if (error) throw error
        toast.success("Project updated successfully!")
      } else {
        // Create new project
        // const { data, error } = await supabase
        //   .from("projects")
        //   .insert({
        //     user_id: user.id,
        //     name,
        //     description,
        //     files,
        //     template_type: "portfolio",
        //   })
        //   .select()
        //   .single()

        // if (error) throw error
        // setCurrentProject(data)
        // router.push(`/builder/${data.id}`)
        toast.success("Project created successfully!")
      }
    } catch (error) {
      console.error("Error saving project:", error)
      toast.error("Failed to save project")
    }
  }

  const handlePublishProject = async () => {
    if (!currentProject) {
      toast.error("Please save your project first")
      return
    }

    try {
    //   const { error } = await supabase
    //     .from("projects")
    //     .update({
    //       is_published: true,
    //       published_url: `https://${currentProject.id}.portfolio-ai.app`,
    //       updated_at: new Date().toISOString(),
    //     })
    //     .eq("id", currentProject.id)

    //   if (error) throw error

      setCurrentProject({ ...currentProject, is_published: true })
      toast.success("Project published successfully!")
    } catch (error) {
      console.error("Error publishing project:", error)
      toast.error("Failed to publish project")
    }
  }

  const handleAIGenerate = async (prompt) => {
    setIsGenerating(true)
    setChatMessages((prev) => [...prev, { role: "user", content: prompt }])

    try {
      // Simulate AI response for now - in real implementation, this would call an AI API
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const aiResponse = "I'll help you build that! Let me generate the code for you."
      setChatMessages((prev) => [...prev, { role: "assistant", content: aiResponse }])

      // Generate sample code based on prompt
      if (prompt.toLowerCase().includes("hero section")) {
        setFiles((prev) => ({
          ...prev,
          "app/page.tsx": `export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            John Doe
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Full-stack developer passionate about creating beautiful, functional web experiences
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-8 py-3 rounded-xl font-medium hover:scale-105 transition-transform">
              View My Work
            </button>
            <button className="border border-slate-600 text-slate-300 px-8 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}`,
        }))
        setActiveFile("app/page.tsx")
      }
    } catch (error) {
      console.error("Error generating with AI:", error)
      setChatMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ])
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="h-screen flex flex-col bg-slate-900">
      <BuilderHeader project={currentProject} onSave={handleSaveProject} onPublish={handlePublishProject} />

      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* Chat Interface */}
          <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
            <ChatInterface messages={chatMessages} onSendMessage={handleAIGenerate} isGenerating={isGenerating} />
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Code Editor */}
          <ResizablePanel defaultSize={40} minSize={30}>
            <div className="h-full flex flex-col">
              <FileExplorer
                files={files}
                activeFile={activeFile}
                onFileSelect={setActiveFile}
                onFileCreate={(name) => {
                  setFiles((prev) => ({ ...prev, [name]: "" }))
                  setActiveFile(name)
                }}
                onFileDelete={(name) => {
                  const newFiles = { ...files }
                  delete newFiles[name]
                  setFiles(newFiles)
                  if (activeFile === name) {
                    setActiveFile(Object.keys(newFiles)[0] || "")
                  }
                }}
              />
              <CodeEditor
                file={activeFile}
                content={files[activeFile] || ""}
                onChange={(content) => {
                  setFiles((prev) => ({ ...prev, [activeFile]: content }))
                }}
              />
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Live Preview */}
          <ResizablePanel defaultSize={35} minSize={25}>
            <LivePreview files={files} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}
