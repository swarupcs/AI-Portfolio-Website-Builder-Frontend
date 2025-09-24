import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

const PortfolioTitleModal = ({ isOpen, onClose, onConfirm, isLoading }) => {
  const [title, setTitle] = useState('');

  const handleConfirm = () => {
    onConfirm(title);
    setTitle('');
  };

  const handleClose = () => {
    onClose();
    setTitle('');
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='fixed inset-0 bg-black/50' onClick={handleClose}></div>
      <div className='bg-black rounded-lg shadow-lg p-6 w-full max-w-md mx-4 z-50'>
        <h2 className='text-xl font-semibold mb-4'>Create New Portfolio</h2>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <label htmlFor='portfolio-title' className='text-sm font-medium'>
              Portfolio Title (Optional)
            </label>
            <Input
              id='portfolio-title'
              placeholder='e.g., My Software Portfolio'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' && !isLoading && handleConfirm()
              }
            />
            <p className='text-sm text-gray-600'>
              Leave blank to auto-generate a title based on your resume
            </p>
          </div>
          <div className='flex justify-end space-x-2'>
            <Button
              variant='outline'
              onClick={handleClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button onClick={handleConfirm} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className='h-4 w-4 mr-2 animate-spin' />
                  Creating...
                </>
              ) : (
                'Create Portfolio'
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTitleModal;
