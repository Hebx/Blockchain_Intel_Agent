'use client';

import { useChat } from '@ai-sdk/react';
import ChatInput from '@/components/chat-input';
import { useEffect, useRef } from 'react';

export default function Web3AgentPage() {
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

  const { messages, sendMessage, status, error } = useChat();

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="border-b p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">🌐 Web3 Intelligence Agent</h1>
          <p className="text-sm opacity-90">Ask questions about blockchain data powered by AI</p>
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
                  text="Analyze a wallet address"
                  onClick={() =>
                    sendMessage({ text: 'Analyze account 0x... - show recent transactions' })
                  }
                />
                <QuerySuggestion
                  text="Check chain health"
                  onClick={() => sendMessage({ text: "What's the current health status of the network?" })}
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
            status={status === 'streaming' ? 'streaming' : 'idle'}
            onSubmit={text => sendMessage({ text })}
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
    <button
      onClick={onClick}
      className="text-left p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
    >
      <p className="text-sm font-medium text-gray-800">{text}</p>
    </button>
  );
}

