import { useState, forwardRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ChainSelector, { type Chain } from '@/components/web3/ChainSelector';
import { SUPPORTED_CHAINS } from '@/components/web3/ChainSelector';

interface ChatInputProps {
  status: string;
  onSubmit: (text: string, chainId: number) => void;
  stop?: () => void;
}

const ChatInput = forwardRef<HTMLInputElement, ChatInputProps>(
  ({ status, onSubmit, stop }, ref) => {
    const [text, setText] = useState('');
    const [chainId, setChainId] = useState(1);

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (text.trim() === '') return;
          onSubmit(text, chainId);
          setText('');
        }}
      >
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <ChainSelector value={chainId} onValueChange={setChainId} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Select blockchain network</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Input
            ref={ref}
            className="flex-1"
            placeholder="Ask about blockchain data..."
            disabled={status === 'streaming'}
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <Button
            type="submit"
            disabled={status === 'streaming' || text.trim() === ''}
          >
            {status === 'streaming' ? 'Sending...' : 'Send'}
          </Button>
          {stop && status === 'streaming' && (
            <Button type="button" variant="destructive" onClick={stop}>
              Stop
            </Button>
          )}
        </div>
      </form>
    );
  }
);

ChatInput.displayName = 'ChatInput';

export default ChatInput;
