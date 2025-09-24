import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

const ErrorAlert = ({ error, onRetry }) => {
  if (!error) return null;

  return (
    <div className='container mx-auto px-6 pb-4'>
      <div className='p-4 bg-red-50 border border-red-200 rounded-lg'>
        <div className='flex items-center'>
          <AlertCircle className='h-4 w-4 text-red-600 mr-2' />
          <p className='text-red-700'>
            {error}
            {onRetry && (
              <Button
                variant='ghost'
                size='sm'
                onClick={onRetry}
                className='ml-2 h-6 px-2 text-red-700 hover:text-red-800'
              >
                <RefreshCw className='h-3 w-3 mr-1' />
                Retry
              </Button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
