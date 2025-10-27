'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import ChatInput from '@/components/chat-input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useRef, useState, useMemo } from 'react';
import { ChevronLeft } from 'lucide-react';

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
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">🌐 Web3 Intelligence Agent</h1>
            <p className="text-sm opacity-90">Ask questions about blockchain data powered by AI</p>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold mb-4">Welcome to Web3 Agent!</h2>
              <p className="text-gray-600 mb-6">
                Ask me anything about the blockchain. Try these queries:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <QuerySuggestion
                  text="What's the latest block on Ethereum?"
                  onClick={() => sendMessage({ text: "What's the latest block on Ethereum?" })}
                />
                <QuerySuggestion
                  text="Show me top USDC holders"
                  onClick={() => sendMessage({ text: 'Show me the top 10 holders of USDC' })}
                />
                <QuerySuggestion
                  text="Analyze this wallet"
                  onClick={() => handleTemplateClick('Analyze wallet: [enter wallet address here]')}
                />
                <QuerySuggestion
                  text="Show top holders of token"
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
              <div
                className={`max-w-3xl rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold">
                    {message.role === 'user' ? '👤 You' : '🤖 AI'}
                  </span>
                </div>
                <div className="whitespace-pre-wrap">
                  {message.parts.map((part: any, idx: number) => 
                    part.type === 'text' ? part.text : null
                  )}
                </div>
              </div>
            </div>
          ))}

          {status === 'streaming' && (
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-lg p-4 animate-pulse">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">🤖 AI</span>
                </div>
                <div className="h-4 bg-gray-300 rounded w-32 mt-2"></div>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-semibold">Error:</p>
              <p className="text-red-600 text-sm">{error.message}</p>
            </div>
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
 * Query suggestion button component
 */
function QuerySuggestion({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="text-left p-4 h-auto hover:bg-blue-50 hover:border-blue-300 transition-colors"
    >
      <p className="text-sm font-medium text-gray-800">{text}</p>
    </Button>
  );
}

