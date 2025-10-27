'use client';

import { Badge } from '@/components/ui/badge';
import { Network } from 'lucide-react';

interface ChainBadgeProps {
  chainId: number;
  className?: string;
}

const CHAIN_INFO: Record<number, { name: string; color: string }> = {
  1: { name: 'Ethereum', color: 'bg-blue-500' },
  8453: { name: 'Base', color: 'bg-blue-600' },
  10: { name: 'Optimism', color: 'bg-red-500' },
  137: { name: 'Polygon', color: 'bg-purple-500' },
  42161: { name: 'Arbitrum', color: 'bg-blue-400' },
};

export default function ChainBadge({ chainId, className }: ChainBadgeProps) {
  const chain = CHAIN_INFO[chainId] || CHAIN_INFO[1];

  return (
    <Badge 
      variant="outline" 
      className={`flex items-center gap-1.5 ${className}`}
    >
      <div className={`w-2 h-2 rounded-full ${chain.color}`} />
      <Network className="h-3 w-3" />
      <span>{chain.name}</span>
    </Badge>
  );
}

