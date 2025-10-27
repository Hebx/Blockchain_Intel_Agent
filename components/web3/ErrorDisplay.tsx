/**
 * Enhanced error display component with retry functionality
 */

'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw, Copy } from 'lucide-react';
import { useState } from 'react';

interface ErrorDisplayProps {
  error: Error;
  onRetry?: () => void;
  showDetails?: boolean;
}

export default function ErrorDisplay({ error, onRetry, showDetails = false }: ErrorDisplayProps) {
  const [showFullError, setShowFullError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyError = () => {
    navigator.clipboard.writeText(error.message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Parse error type for better messaging
  const getErrorType = (error: Error) => {
    const message = error.message.toLowerCase();
    
    if (message.includes('rate limit')) {
      return { type: 'rate_limit', title: 'Rate Limit Exceeded', suggestion: 'Please wait a moment before trying again.' };
    }
    
    if (message.includes('invalid address') || message.includes('malformed address')) {
      return { type: 'invalid_address', title: 'Invalid Address', suggestion: 'Please check that the address is in the correct format (0x...).' };
    }
    
    if (message.includes('not found') || message.includes('does not exist')) {
      return { type: 'not_found', title: 'Not Found', suggestion: 'The requested data could not be found on this chain.' };
    }
    
    if (message.includes('network') || message.includes('fetch')) {
      return { type: 'network', title: 'Network Error', suggestion: 'Please check your internet connection and try again.' };
    }
    
    if (message.includes('timeout')) {
      return { type: 'timeout', title: 'Request Timeout', suggestion: 'The request took too long. Try reducing the query scope or chain.' };
    }
    
    return { type: 'unknown', title: 'An Error Occurred', suggestion: 'Please try again. If the issue persists, check the console for details.' };
  };

  const errorInfo = getErrorType(error);

  return (
    <Alert variant="destructive" className="max-w-3xl">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle className="flex items-center justify-between">
        <span>{errorInfo.title}</span>
        {onRetry && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onRetry}
            className="h-7"
          >
            <RefreshCw className="h-3 w-3 mr-2" />
            Retry
          </Button>
        )}
      </AlertTitle>
      <AlertDescription>
        <p className="mb-2">{errorInfo.suggestion}</p>
        
        {showDetails && (
          <div className="mt-3">
            <details className="cursor-pointer" onClick={(e) => !showFullError && e.preventDefault()}>
              <summary 
                className="text-sm font-medium cursor-pointer select-none"
                onClick={(e) => {
                  e.preventDefault();
                  setShowFullError(!showFullError);
                }}
              >
                {showFullError ? 'Hide' : 'Show'} technical details
              </summary>
              
              {showFullError && (
                <div className="mt-2 p-2 bg-red-50 rounded text-xs font-mono break-all whitespace-pre-wrap relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyError}
                    className="absolute top-1 right-1 h-6 px-2 text-xs"
                  >
                    {copied ? 'Copied!' : <Copy className="h-3 w-3" />}
                  </Button>
                  {error.message}
                </div>
              )}
            </details>
          </div>
        )}
      </AlertDescription>
    </Alert>
  );
}

