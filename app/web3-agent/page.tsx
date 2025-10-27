'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import ChatInput from '@/components/chat-input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import ChainBadge from '@/components/web3/ChainBadge';
import Link from 'next/link';
import { useEffect, useRef, useState, useMemo } from 'react';
import { ChevronLeft, Sparkles, TrendingUp, Wallet, Coins } from 'lucide-react';

export default function Web3AgentPage() {
  const [chainId, setChainId] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);
  // Generate or retrieve conversation ID from session
  const conversationIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!conversationIdRef.current) {
      // Try to get from session storage
      const stored = sessionStorage.getItem('web3_agent_conversation_id');
      if (stored) {
        conversationIdRef.current = stored;
      } else {
        // Generate new conversation ID
        conversationIdRef.current = `conv_${Date.now()}_${Math.random().toString(36)}`;
        sessionStorage.setItem('web3_agent_conversation_id', conversationIdRef.current);
      }
    }
  }, []);

  // Create custom transport that modifies the fetch to include chainId
  const customTransport = useMemo(() => {
    const originalFetch = globalThis.fetch;
    
    return new DefaultChatTransport({ 
      api: '/api/web3-agent',
      fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
        // If there's a body, parse it and add chainId
        if (init?.body && typeof init.body === 'string') {
          try {
            const bodyData = JSON.parse(init.body);
            init.body = JSON.stringify({ ...bodyData, chainId });
          } catch (e) {
            // If parsing fails, just use original body
          }
        }
        return originalFetch(input, init);
      }
    });
  }, [chainId]);

  const { messages, sendMessage, status, error, stop } = useChat({
    transport: customTransport,
  });

  const handleSubmit = (text: string, submittedChainId: number) => {
    // Check if query has placeholder that needs to be filled
    if (text.includes('[enter')) {
      alert('Please fill in the required information before submitting');
      return;
    }
    
    setChainId(submittedChainId);
    sendMessage({ text });
  };

  const handleTemplateClick = (template: string) => {
    // Focus input field and insert template
    if (inputRef.current) {
      inputRef.current.value = template;
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="border-b p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <Sparkles className="h-6 w-6" />
                Web3 Intelligence Agent
              </h1>
              <p className="text-sm opacity-90">Ask questions about blockchain data powered by AI</p>
            </div>
          </div>
          <ChainBadge chainId={chainId} className="bg-white/10 text-white border-white/20" />
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Welcome to Web3 Agent!</h2>
                <p className="text-gray-600">
                  Ask me anything about the blockchain. Try these queries:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <QueryCard
                  icon={<TrendingUp className="h-5 w-5" />}
                  title="Latest Block"
                  description="Get the most recent block information"
                  onClick={() => sendMessage({ text: "What's the latest block on Ethereum?" })}
                />
                <QueryCard
                  icon={<Coins className="h-5 w-5" />}
                  title="Token Holders"
                  description="View top holders of any token"
                  onClick={() => sendMessage({ text: 'Show me the top 10 holders of USDC' })}
                />
                <QueryCard
                  icon={<Wallet className="h-5 w-5" />}
                  title="Analyze Wallet"
                  description="Deep dive into wallet activity"
                  onClick={() => handleTemplateClick('Analyze wallet: [enter wallet address here]')}
                />
                <QueryCard
                  icon={<Sparkles className="h-5 w-5" />}
                  title="Token Analysis"
                  description="Analyze any token's distribution"
                  onClick={() => handleTemplateClick('Show top 10 holders of [enter token contract address]')}
                />
              </div>
            </div>
          )}

          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <Card
                className={`max-w-3xl ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={message.role === 'user' ? 'secondary' : 'default'} className={message.role === 'user' ? 'bg-blue-700' : ''}>
                        {message.role === 'user' ? '👤 You' : '🤖 AI'}
                      </Badge>
                      {message.role === 'user' && (
                        <ChainBadge chainId={chainId} className="text-xs bg-white/10 text-white border-white/20" />
                      )}
                    </div>
                  </div>
                  <div className="whitespace-pre-wrap">
                    {message.parts.map((part: any, idx: number) => 
                      part.type === 'text' ? part.text : null
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {status === 'streaming' && (
            <div className="flex justify-start">
              <Card className="max-w-3xl bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="default">🤖 AI</Badge>
                    <span className="text-xs text-gray-500">Thinking...</span>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertDescription>
                <p className="font-semibold mb-1">Error occurred</p>
                <p className="text-sm">{error.message}</p>
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="border-t bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <ChatInput
            ref={inputRef}
            status={status === 'streaming' ? 'streaming' : 'idle'}
            onSubmit={handleSubmit}
            stop={stop}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Query card component with icon and description
 */
function QueryCard({
  icon,
  title,
  description,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all hover:border-blue-400 hover:scale-105"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
            {icon}
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

