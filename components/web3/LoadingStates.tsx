/**
 * Enhanced loading components with blockchain-themed animations
 */

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LoadingStatesProps {
  stage: 'parsing' | 'fetching' | 'analyzing' | 'thinking';
  message?: string;
}

export function LoadingState({ stage, message }: LoadingStatesProps) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const getStageMessage = () => {
    switch (stage) {
      case 'parsing':
        return message || 'Parsing query...';
      case 'fetching':
        return message || 'Fetching blockchain data...';
      case 'analyzing':
        return message || 'Analyzing on-chain data...';
      case 'thinking':
        return message || 'AI thinking...';
      default:
        return 'Processing...';
    }
  };

  return (
    <div className="flex justify-start">
      <Card className="max-w-3xl bg-white">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="default" className="flex items-center gap-2">
              <Sparkles className="h-3 w-3 animate-pulse" />
              🤖 AI
            </Badge>
            <span className="text-xs text-gray-500">
              {getStageMessage()}{dots}
            </span>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function BlockchainLoadingIcon({ chainId }: { chainId: number }) {
  const chainConfigs: Record<number, { name: string; color: string }> = {
    1: { name: 'ETH', color: 'bg-blue-500' },
    8453: { name: 'BASE', color: 'bg-blue-400' },
    10: { name: 'OP', color: 'bg-red-500' },
    137: { name: 'MATIC', color: 'bg-purple-500' },
    42161: { name: 'ARB', color: 'bg-cyan-500' },
  };

  const config = chainConfigs[chainId] || { name: 'CHAIN', color: 'bg-gray-500' };

  return (
    <div className="relative">
      {/* Animated blockchain link */}
      <div className="flex gap-1 items-center">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${config.color} animate-pulse`}
            style={{
              animationDelay: `${i * 200}ms`,
            }}
          />
        ))}
      </div>
      
      {/* Chain label */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs font-mono text-gray-500">
        {config.name}
      </div>
    </div>
  );
}

export function ProgressIndicator({ 
  steps, 
  currentStep 
}: { 
  steps: string[], 
  currentStep: number 
}) {
  return (
    <div className="space-y-2">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        
        return (
          <div key={index} className="flex items-center gap-2">
            <div className={`
              w-2 h-2 rounded-full flex-shrink-0
              ${isCompleted ? 'bg-green-500' : isActive ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'}
            `} />
            <span className={`text-sm ${isActive ? 'font-medium text-blue-600' : 'text-gray-500'}`}>
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function ThinkingIndicator() {
  const [thoughts] = useState([
    'Exploring blockchain...',
    'Decoding smart contracts...',
    'Analyzing token transfers...',
    'Tracing fund flows...',
    'Identifying patterns...',
  ]);
  
  const [currentThought, setCurrentThought] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThought((prev) => (prev + 1) % thoughts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [thoughts.length]);

  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 italic">
      <Sparkles className="h-4 w-4 animate-pulse text-blue-600" />
      <span className="animate-pulse">{thoughts[currentThought]}</span>
    </div>
  );
}

