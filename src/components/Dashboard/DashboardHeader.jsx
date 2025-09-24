import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Search, Plus, Settings, Loader2 } from 'lucide-react';
import { useSignout } from '@/hooks/auth/useAuth';

// Import our separated components

import mockAPI from '@/apis/portfolio/mockAPI';
import PortfolioStatusModal from '../Portfolio/PortfolioStatusModal';
import PortfolioTitleModal from '../Portfolio/PortfolioTitleModal';
import PortfolioPreviewPage from '../Portfolio/PortfolioPreviewPage';
import ErrorAlert from '../Portfolio/ErrorAlert';
import UserDropdown from '../Portfolio/UserDropDown';


export function DashboardHeader({ userData }) {
  const { mutate: signout } = useSignout();

  // Portfolio creation states
  const [showTitleModal, setShowTitleModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [currentPortfolioId, setCurrentPortfolioId] = useState(null);
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

      setCurrentPortfolioId(response.portfolio_id);
      setShowStatusModal(true);
    } catch (error) {
      console.error('Error creating portfolio:', error);
      setError('Failed to create portfolio. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  const handleStatusComplete = (portfolioId) => {
    setShowStatusModal(false);
    setShowPreview(true);
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
    setCurrentPortfolioId(null);
  };

  // If showing preview, render the preview page instead of header
  if (showPreview && currentPortfolioId) {
    return (
      <PortfolioPreviewPage
        portfolioId={currentPortfolioId}
        onBack={handleBackToDashboard}
        mockAPI={mockAPI}
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
        portfolioId={currentPortfolioId}
        onComplete={handleStatusComplete}
        onError={handleStatusError}
        mockAPI={mockAPI}
      />
    </>
  );
}
