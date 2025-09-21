
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Sparkles, Briefcase, User, Code, Palette } from "lucide-react"
import { useNavigate } from "react-router-dom"




const templates = [
  {
    id: "portfolio",
    name: "Portfolio Website",
    description: "A modern portfolio to showcase your work and skills",
    icon: User,
    color: "from-cyan-500 to-blue-500",
    files: {
      "app/page.tsx": `export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            Your Name
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
    },
  },
  {
    id: "business",
    name: "Business Landing",
    description: "Professional landing page for your business or startup",
    icon: Briefcase,
    color: "from-green-500 to-emerald-500",
    files: {
      "app/page.tsx": `export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Your Business Name
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We help businesses grow with innovative solutions and exceptional service
          </p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
            Get Started
          </button>
        </div>
      </header>
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
@tailwind utilities;`,
    },
  },
  {
    id: "creative",
    name: "Creative Showcase",
    description: "Bold and artistic design for creatives and artists",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    files: {
      "app/page.tsx": `export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-6">
            Creative Studio
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Where imagination meets innovation. Bringing your wildest ideas to life.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">
            Explore My Art
          </button>
        </div>
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
@tailwind utilities;`,
    },
  },
  {
    id: "developer",
    name: "Developer Portfolio",
    description: "Technical portfolio with code examples and projects",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    files: {
      "app/page.tsx": `export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-8">
            <span className="text-cyan-400 font-mono">$ whoami</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 font-mono">
            <span className="text-cyan-400">&gt;</span> Full Stack Developer
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            I build scalable web applications with modern technologies. 
            Passionate about clean code and user experience.
          </p>
          <div className="flex gap-4">
            <button className="bg-cyan-500 text-slate-900 px-6 py-3 rounded font-medium hover:bg-cyan-400 transition-colors">
              View Projects
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded font-medium hover:bg-cyan-500 hover:text-slate-900 transition-colors">
              Download CV
            </button>
          </div>
        </div>
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
  font-family: 'JetBrains Mono', monospace;
}`,
    },
  },
]

export function ProjectTemplates({ userId, onProjectCreated }) {
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<(typeof templates)[0] | null>(null)
  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [isCreating, setIsCreating] = useState(false)

  const navigate = useNavigate()

  const handleCreateProject = async () => {
    if (!selectedTemplate || !projectName.trim()) return

    setIsCreating(true)
    try {
    //   const { data, error } = await supabase
    //     .from("projects")
    //     .insert({
    //       user_id: userId,
    //       name: projectName,
    //       description: projectDescription,
    //       template_type: selectedTemplate.id,
    //       files: selectedTemplate.files,
    //     })
    //     .select()
    //     .single()

    //   if (error) throw error

      toast.success("Project created successfully!")
      setCreateDialogOpen(false)
      setProjectName("")
      setProjectDescription("")
      setSelectedTemplate(null)
      onProjectCreated()
    //   navigate(`/builder/${data.id}`)
    } catch (error) {
      console.error("Error creating project:", error)
      toast.error("Failed to create project")
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Start with a Template</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template) => (
          <GlassCard
            key={template.id}
            className="p-6 cursor-pointer hover:scale-[1.02] transition-all duration-200 group"
            onClick={() => {
              setSelectedTemplate(template)
              setProjectName(`My ${template.name}`)
              setProjectDescription(template.description)
              setCreateDialogOpen(true)
            }}
          >
            <div className="text-center">
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${template.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <template.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{template.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{template.description}</p>
              <Badge variant="outline" className="border-slate-600 text-slate-400">
                {template.id}
              </Badge>
            </div>
          </GlassCard>
        ))}
      </div>

      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent className="bg-slate-800 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Create New Project
            </DialogTitle>
          </DialogHeader>
          {selectedTemplate && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-r ${selectedTemplate.color} flex items-center justify-center`}
                >
                  <selectedTemplate.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white">{selectedTemplate.name}</h4>
                  <p className="text-sm text-slate-400">{selectedTemplate.description}</p>
                </div>
              </div>

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
                  Description (Optional)
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
                  onClick={handleCreateProject}
                  disabled={!projectName.trim() || isCreating}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600"
                >
                  {isCreating ? "Creating..." : "Create Project"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCreateDialogOpen(false)}
                  className="border-slate-600 text-slate-300"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
