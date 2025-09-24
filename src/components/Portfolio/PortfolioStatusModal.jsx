import React, { useState, useEffect, useRef } from 'react';
import { Loader2, CheckCircle, AlertCircle, Rocket } from 'lucide-react';

const PortfolioStatusModal = ({
  isOpen,
  onClose,
  portfolioId,
  onComplete,
  onError,
  mockAPI,
}) => {
  const [status, setStatus] = useState('creating');
  const [currentMessage, setCurrentMessage] = useState(
    'Creating your portfolio…'
  );
  const [progress, setProgress] = useState(0);
  const pollingRef = useRef(null);
  const messageRef = useRef(null);

  const loadingMessages = [
    'Analyzing your resume 📄',
    'Optimizing your projects 🚀',
    'Writing your About Me section ✍️',
    'Choosing the best color palette 🎨',
    'Generating layout structure 📐',
    'Finalizing design elements ✨',
  ];

  useEffect(() => {
    if (!isOpen || !portfolioId) return;

    let messageIndex = 0;
    let progressValue = 0;

    // Cycle through loading messages
    messageRef.current = setInterval(() => {
      setCurrentMessage(loadingMessages[messageIndex]);
      messageIndex = (messageIndex + 1) % loadingMessages.length;
      progressValue = Math.min(progressValue + 15, 90);
      setProgress(progressValue);
    }, 3000);

    // Start polling after initial delay
    const startPolling = () => {
      pollingRef.current = setInterval(async () => {
        try {
          const response = await mockAPI.getPortfolioStatus(portfolioId);

          if (response.status === 'generated') {
            setStatus('generated');
            setCurrentMessage('Portfolio generated successfully! 🎉');
            setProgress(100);
            clearInterval(pollingRef.current);
            clearInterval(messageRef.current);
            setTimeout(() => onComplete(portfolioId), 1500);
          } else if (response.status === 'error') {
            setStatus('error');
            clearInterval(pollingRef.current);
            clearInterval(messageRef.current);
            onError();
          }
        } catch (error) {
          console.error('Polling error:', error);
          setStatus('error');
          clearInterval(pollingRef.current);
          clearInterval(messageRef.current);
          onError();
        }
      }, 2000);
    };

    setTimeout(startPolling, 2000);

    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
      if (messageRef.current) clearInterval(messageRef.current);
    };
  }, [isOpen, portfolioId, onComplete, onError, mockAPI]);

  const getStatusIcon = () => {
    switch (status) {
      case 'generating':
        return <Loader2 className='h-8 w-8 animate-spin text-blue-500' />;
      case 'generated':
        return <CheckCircle className='h-8 w-8 text-green-500' />;
      case 'error':
        return <AlertCircle className='h-8 w-8 text-red-500' />;
      default:
        return <Rocket className='h-8 w-8 text-blue-500' />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='fixed inset-0 bg-black/50' onClick={onClose}></div>
      <div className='bg-black rounded-lg shadow-lg p-6 w-full max-w-md mx-4 z-50'>
        <h2 className='text-xl font-semibold mb-4 text-center'>
          Building Your Portfolio
        </h2>
        <div className='flex flex-col items-center space-y-6'>
          {getStatusIcon()}

          <div className='text-center space-y-2'>
            <p className='text-lg font-medium'>{currentMessage}</p>
            {status === 'generating' && (
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div
                  className='bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out'
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>

          {status === 'error' && (
            <div className='w-full p-4 bg-red-50 border border-red-200 rounded-lg'>
              <div className='flex items-center'>
                <AlertCircle className='h-4 w-4 text-red-600 mr-2' />
                <p className='text-red-700'>
                  Something went wrong while generating your portfolio. Please
                  try again.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioStatusModal;
