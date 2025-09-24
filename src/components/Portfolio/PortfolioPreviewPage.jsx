import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Loader2, Eye, CheckCircle, Settings, Edit } from 'lucide-react';

const PortfolioPreviewPage = ({ portfolioId, onBack, mockAPI }) => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await mockAPI.getPortfolio(portfolioId);
        setPortfolio(data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [portfolioId, mockAPI]);

  const handleCopyUrl = () => {
    if (portfolio?.url) {
      navigator.clipboard.writeText(portfolio.url);
      // Add toast notification here
    }
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center h-64'>
        <Loader2 className='h-8 w-8 animate-spin' />
      </div>
    );
  }

  return (
    <div className='h-screen flex flex-col'>
      <div className='border-b p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Button variant='ghost' onClick={onBack}>
              ← Back to Dashboard
            </Button>
            <h1 className='text-2xl font-bold'>{portfolio?.title}</h1>
            <Badge variant='secondary'>Preview</Badge>
          </div>
        </div>
      </div>

      <div className='flex-1 flex'>
        {/* Left side - Live Preview */}
        <div className='flex-1 bg-gray-50 p-4'>
          <div className='h-full bg-white rounded-lg shadow-sm border overflow-hidden'>
            <div className='h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50'>
              <div className='text-center space-y-4 p-8'>
                <div className='w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center'>
                  <Eye className='h-8 w-8 text-blue-600' />
                </div>
                <h2 className='text-2xl font-bold text-gray-800'>
                  Portfolio Preview
                </h2>
                <p className='text-gray-600'>
                  Your portfolio is ready! This is a live preview of how it will
                  look.
                </p>
                <div className='grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto'>
                  {portfolio?.sections.map((section, index) => (
                    <div
                      key={index}
                      className='bg-white p-3 rounded border shadow-sm'
                    >
                      <div className='h-16 bg-gray-100 rounded mb-2'></div>
                      <p className='text-sm font-medium capitalize'>
                        {section}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Controls */}
        <div className='w-80 bg-white border-l p-6'>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Portfolio Actions</h3>
              <div className='space-y-3'>
                <Button className='w-full' size='lg'>
                  <CheckCircle className='h-4 w-4 mr-2' />
                  Publish Portfolio
                </Button>

                <Button variant='outline' className='w-full'>
                  <Settings className='h-4 w-4 mr-2' />
                  Customize Theme
                </Button>

                <Button variant='outline' className='w-full'>
                  <Edit className='h-4 w-4 mr-2' />
                  Edit Content
                </Button>
              </div>
            </div>

            <div className='border-t pt-6'>
              <h4 className='font-medium mb-3'>Portfolio Details</h4>
              <div className='space-y-2 text-sm text-gray-600'>
                <p>
                  <span className='font-medium'>Theme:</span> {portfolio?.theme}
                </p>
                <p>
                  <span className='font-medium'>Sections:</span>{' '}
                  {portfolio?.sections.length}
                </p>
                <p>
                  <span className='font-medium'>Status:</span>{' '}
                  <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
                    Draft
                  </span>
                </p>
              </div>
            </div>

            <div className='border-t pt-6'>
              <h4 className='font-medium mb-3'>Share Preview</h4>
              <div className='flex space-x-2'>
                <Input
                  value={portfolio?.url || ''}
                  readOnly
                  className='text-xs'
                />
                <Button variant='outline' size='sm' onClick={handleCopyUrl}>
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreviewPage;
