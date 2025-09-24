import { AIPromptGenerator } from "@/components/Dashboard/AIPromptGenerator"
import { DashboardHeader } from "@/components/Dashboard/DashboardHeader"
import { DashboardStats } from "@/components/Dashboard/DashboardStats"
import { useState } from "react"
import { ProjectViewerPage } from "./ProjectViewerPage"
import { RecentProjects } from "@/components/Dashboard/RecentProjects"
import { QuickActions } from "@/components/Dashboard/QuickActions"


export default function DashboardPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-background">
        <ProjectViewerPage project={selectedProject} onBack={() => setSelectedProject(null)} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-6 py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DashboardStats />
            <RecentProjects onProjectClick={setSelectedProject} />
          </div>
          <div className="space-y-8">
            <AIPromptGenerator />
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  )
}
