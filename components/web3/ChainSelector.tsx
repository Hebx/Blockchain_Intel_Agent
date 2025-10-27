'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export interface Chain {
  id: number;
  name: string;
  label: string;
}

export const SUPPORTED_CHAINS: Chain[] = [
  { id: 1, name: 'ethereum', label: 'Ethereum' },
  { id: 8453, name: 'base', label: 'Base' },
  { id: 10, name: 'optimism', label: 'Optimism' },
  { id: 137, name: 'polygon', label: 'Polygon' },
  { id: 42161, name: 'arbitrum', label: 'Arbitrum' },
];

interface ChainSelectorProps {
  value?: number;
  onValueChange: (chainId: number) => void;
}

export default function ChainSelector({ value = 1, onValueChange }: ChainSelectorProps) {
  const selectedChain = SUPPORTED_CHAINS.find(chain => chain.id === value) || SUPPORTED_CHAINS[0];

  return (
    <Select
      value={value.toString()}
      onValueChange={(val) => onValueChange(Number(val))}
    >
      <SelectTrigger className="w-[160px]">
        <SelectValue placeholder="Select chain">
          {selectedChain.label}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {SUPPORTED_CHAINS.map((chain) => (
          <SelectItem key={chain.id} value={chain.id.toString()}>
            {chain.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

