import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Search, Plus, Settings, Loader2 } from 'lucide-react';
import { useSignout } from '@/hooks/auth/useAuth';

// Import our separated components
import mockAPI from '@/apis/portfolio/mockAPI';
import PortfolioStatusModal from '../Portfolio/PortfolioStatusModal';
import PortfolioTitleModal from '../Portfolio/PortfolioTitleModal';

import ErrorAlert from '../Portfolio/ErrorAlert';
import UserDropdown from '../Portfolio/UserDropDown';
import { ProjectViewerPage } from '@/Pages/ProjectViewerPage';

export function DashboardHeader({ userData }) {
  const { mutate: signout } = useSignout();

  // Portfolio creation states
  const [showTitleModal, setShowTitleModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null); // Changed from portfolioId to project
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState(null);

  function handleLogout() {
    signout();
  }

  function handleNewPortfolio() {
    console.log('Creating new portfolio...');
    setShowTitleModal(true);
  }

  const handleCreatePortfolio = async (title) => {
    setIsCreating(true);
    setShowTitleModal(false);
    setError(null);

    try {
      // Mock selected resume ID - in real app, get from user selection
      const selectedResumeId = 'resume_123';

      const response = await mockAPI.createPortfolio({
        resume_id: selectedResumeId,
        title: title || 'My Portfolio',
      });

      setCurrentProject({
        id: response.portfolio_id,
        portfolioId: response.portfolio_id, // Keep for status modal compatibility
      });
      setShowStatusModal(true);
    } catch (error) {
      console.error('Error creating portfolio:', error);
      setError('Failed to create portfolio. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  const handleStatusComplete = async (portfolioId) => {
    setShowStatusModal(false);

    try {
      // Fetch the complete project data from the API
      const projectData = await mockAPI.getPortfolio(portfolioId);

      // Transform the API response to match ProjectViewerPage expected format
      const project = {
        id: portfolioId,
        name: projectData.title || 'My Portfolio',
        status: 'Published',
        views: projectData.views || 0,
        lastModified: new Date().toLocaleDateString(),
        framework: projectData.framework || 'html', // Default to html if not specified
        code:
          projectData.code ||
          projectData.html_content ||
          '<h1>Hello World</h1>',
        previewUrl:
          projectData.preview_url ||
          `data:text/html;base64,${btoa(
            projectData.html_content || '<h1>Portfolio Preview</h1>'
          )}`,
        files: projectData.files || null, // Include files if it's a Next.js project
        description: projectData.description || 'Generated portfolio',
      };

      setCurrentProject(project);
      setShowPreview(true);
    } catch (error) {
      console.error('Error fetching project data:', error);
      setError('Failed to load project preview. Please try again.');
    }
  };

  const handleStatusError = () => {
    setShowStatusModal(false);
    setError('Portfolio generation failed. Please try again.');
  };

  const handleRetry = () => {
    setError(null);
    setShowTitleModal(true);
  };

  const handleBackToDashboard = () => {
    setShowPreview(false);
    setCurrentProject(null);
  };

  // If showing preview, render the ProjectViewerPage instead of header
  if (showPreview && currentProject) {
    return (
      <ProjectViewerPage
        project={currentProject}
        onBack={handleBackToDashboard}
      />
    );
  }

  return (
    <>
      <header className='border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50'>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-8'>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
                  <span className='text-primary-foreground font-bold text-sm'>
                    PB
                  </span>
                </div>
                <h1 className='text-xl font-semibold text-foreground'>
                  Portfolio Builder
                </h1>
              </div>
              <nav className='hidden md:flex items-center space-x-6'>
                <a
                  href='#'
                  className='text-foreground hover:text-primary transition-colors'
                >
                  Dashboard
                </a>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  Projects
                </a>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  Templates
                </a>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  Analytics
                </a>
              </nav>
            </div>

            <div className='flex items-center space-x-4'>
              <div className='relative hidden sm:block'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4' />
                <Input
                  placeholder='Search projects...'
                  className='pl-10 w-64 bg-secondary/50 border-border'
                />
              </div>

              <Button
                size='sm'
                className='bg-primary hover:bg-primary/90 cursor-pointer'
                onClick={handleNewPortfolio}
                disabled={isCreating}
              >
                {isCreating ? (
                  <>
                    <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                    Creating...
                  </>
                ) : (
                  <>
                    <Plus className='w-4 h-4 mr-2' />
                    New Portfolio
                  </>
                )}
              </Button>

              <Button variant='ghost' size='sm'>
                <Bell className='w-4 h-4' />
              </Button>

              <Button variant='ghost' size='sm'>
                <Settings className='w-4 h-4' />
              </Button>

              <UserDropdown userData={userData} onLogout={handleLogout} />
            </div>
          </div>
        </div>

        <ErrorAlert error={error} onRetry={handleRetry} />
      </header>

      {/* Portfolio Title Modal */}
      <PortfolioTitleModal
        isOpen={showTitleModal}
        onClose={() => setShowTitleModal(false)}
        onConfirm={handleCreatePortfolio}
        isLoading={isCreating}
      />

      {/* Portfolio Status Modal */}
      <PortfolioStatusModal
        isOpen={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        portfolioId={currentProject?.portfolioId}
        onComplete={handleStatusComplete}
        onError={handleStatusError}
        mockAPI={mockAPI}
      />
    </>
  );
}
