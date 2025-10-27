'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import ChatInput from '@/components/chat-input';
import ChatSidebar from '@/components/web3/ChatSidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import ChainBadge from '@/components/web3/ChainBadge';
import ErrorDisplay from '@/components/web3/ErrorDisplay';
import { LoadingState } from '@/components/web3/LoadingStates';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState, useMemo } from 'react';
import { Sparkles, TrendingUp, Wallet, Coins, MessageSquare, Blocks, Activity, Zap } from 'lucide-react';
import { chatRepository } from '@/lib/db/chat-repository';
import type { ChatWithMetadata, MessageWithMetadata } from '@/lib/db/chat-repository';

export default function Web3AgentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [chainId, setChainId] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatWithMetadata[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  // Use ref to store current chainId for immediate access in transport
  const chainIdRef = useRef(1);
  // Generate or retrieve conversation ID from session
  const conversationIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Sync chainId with ref whenever it changes
    chainIdRef.current = chainId;
  }, [chainId]);

  // Load chat history on mount
  useEffect(() => {
    const loadChatHistory = async () => {
      try {
        const chats = await chatRepository.getChats(50, 0);
        setChatHistory(chats);
      } catch (error) {
        console.error('Failed to load chat history:', error);
      }
    };
    
    loadChatHistory();
  }, []);

  // Initialize or load chat from URL params
  useEffect(() => {
    const chatId = searchParams.get('chat');
    
    if (chatId && chatId !== currentChatId) {
      // Load an existing chat
      loadChat(chatId);
    } else if (!chatId && !currentChatId) {
      // Create new chat
      createNewChat();
    }
  }, [searchParams]);

  const createNewChat = async () => {
    const newChatId = `chat_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    conversationIdRef.current = newChatId;
    setCurrentChatId(newChatId);
    
    // Don't save to DB until first message is sent
    router.push('/web3-agent?chat=' + newChatId);
  };

  const loadChat = async (chatId: string) => {
    setIsLoading(true);
    try {
      conversationIdRef.current = chatId;
      setCurrentChatId(chatId);
      
      // Load chat metadata
      const chat = await chatRepository.getChat(chatId);
      if (chat) {
        setChainId(chat.chain_id);
      }
      
      // Load messages
      const messages = await chatRepository.getMessages(chatId);
      if (messages && messages.length > 0) {
        // Convert to AI SDK format
        const formattedMessages = messages.map(msg => ({
          id: msg.id,
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
          parts: [{ type: 'text' as const, text: msg.content }],
        }));
        
        // Set messages in useChat
        if (setMessages) {
          setMessages(formattedMessages as any);
        }
      } else {
        // Clear messages if no messages found
        if (setMessages) {
          setMessages([]);
        }
      }
    } catch (error) {
      console.error('Failed to load chat:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    router.push('/web3-agent');
  };

  const handleSelectChat = (chatId: string) => {
    router.push(`/web3-agent?chat=${chatId}`);
  };

  const handleDeleteChat = async (chatId: string) => {
    try {
      await chatRepository.deleteChat(chatId);
      const updated = chatHistory.filter(c => c.id !== chatId);
      setChatHistory(updated);
      
      if (chatId === currentChatId) {
        router.push('/web3-agent');
      }
    } catch (error) {
      console.error('Failed to delete chat:', error);
    }
  };

  // Create custom transport that modifies the fetch to include chainId
  // Use ref to get current chainId without memoization dependency
  const customTransport = useMemo(() => {
    return new DefaultChatTransport({ 
      api: '/api/web3-agent',
      fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
        // If there's a body, parse it and add chainId from ref (always current)
        if (init?.body && typeof init.body === 'string') {
          try {
            const bodyData = JSON.parse(init.body);
            init.body = JSON.stringify({ ...bodyData, chainId: chainIdRef.current });
          } catch (e) {
            // If parsing fails, just use original body
          }
        }
        return globalThis.fetch(input, init);
      }
    });
  }, []); // Empty deps - uses ref for current value

  const { messages, sendMessage, status, error, stop, setMessages } = useChat({
    transport: customTransport,
    onFinish: async ({ message }) => {
      // Save assistant message to database
      if (currentChatId) {
        try {
          // Extract text content from message parts
          const textContent = message.parts?.find(p => p.type === 'text')?.text || '';
          
          await chatRepository.saveMessage(currentChatId, {
            role: 'assistant',
            content: textContent,
            chain_id: chainId,
            metadata: {},
          });
          
          // Update chat preview and title
          const chat = await chatRepository.getChat(currentChatId);
          if (!chat || chat.title === 'New Chat') {
            // Generate title from first user message
            const userMessages = await chatRepository.getMessages(currentChatId);
            const firstUserMessage = userMessages.find(m => m.role === 'user');
            if (firstUserMessage && textContent) {
              const title = firstUserMessage.content.substring(0, 50);
              await chatRepository.updateChat(currentChatId, {
                title,
                preview: textContent.substring(0, 100),
              });
              
              // Reload chat history to reflect update
              const updatedChats = await chatRepository.getChats(50, 0);
              setChatHistory(updatedChats);
            }
          }
        } catch (error) {
          console.error('Failed to save message:', error);
        }
      }
    },
  });

  const handleSubmit = async (text: string, submittedChainId: number) => {
    // Check if query has placeholder that needs to be filled
    if (text.includes('[enter')) {
      alert('Please fill in the required information before submitting');
      return;
    }
    
    // Update both state and ref
    setChainId(submittedChainId);
    chainIdRef.current = submittedChainId;
    
    // Ensure we have a chat ID
    if (!currentChatId) {
      await createNewChat();
      // Wait a moment for the chat to be created
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Save user message to database
    if (currentChatId) {
      try {
        // Create chat if it doesn't exist
        const chat = await chatRepository.getChat(currentChatId);
        if (!chat) {
          await chatRepository.createChat('New Chat', null, submittedChainId);
        }
        
        // Save user message
        await chatRepository.saveMessage(currentChatId, {
          role: 'user',
          content: text,
          chain_id: submittedChainId,
          metadata: {},
        });
      } catch (error) {
        console.error('Failed to save user message:', error);
      }
    }
    
    // Send message immediately - transport will use the updated ref value
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
    <div className="flex h-screen">
      {/* Sidebar */}
      {showSidebar && (
        <ChatSidebar
          chats={chatHistory.map(chat => ({
            id: chat.id,
            title: chat.title,
            preview: chat.preview || '',
            timestamp: chat.updated_at,
            chain_id: chat.chain_id,
          }))}
          currentChatId={currentChatId}
          onNewChat={handleNewChat}
          onSelectChat={handleSelectChat}
          onDeleteChat={handleDeleteChat}
        />
      )}
      
      <div className="flex flex-col flex-1 h-screen">
        {/* Header */}
        <header className="border-b p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/20"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
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
          {isLoading && (
            <div className="flex justify-center items-center h-full">
              <div className="text-center">
                <Skeleton className="h-12 w-12 mx-auto mb-4" />
                <p className="text-gray-600">Loading chat...</p>
              </div>
            </div>
          )}
          
          {!isLoading && messages.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Welcome to Web3 Agent!
                  </h2>
                </div>
                <p className="text-gray-600 text-lg">
                  Ask me anything about the blockchain. Try these queries:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                <QueryCard
                  icon={<TrendingUp className="h-5 w-5" />}
                  title="Latest Block"
                  description="Get the most recent block"
                  onClick={() => handleTemplateClick("What's the latest block on Ethereum?")}
                />
                <QueryCard
                  icon={<Coins className="h-5 w-5" />}
                  title="Token Holders"
                  description="View top token holders"
                  onClick={() => handleTemplateClick('Show me the top 10 holders of USDC')}
                />
                <QueryCard
                  icon={<Wallet className="h-5 w-5" />}
                  title="Full Account Analysis"
                  description="Comprehensive wallet analysis"
                  onClick={() => handleTemplateClick('Perform full account analysis on wallet: [enter address]')}
                />
                <QueryCard
                  icon={<Sparkles className="h-5 w-5" />}
                  title="Token Concentration"
                  description="Analyze token distribution"
                  onClick={() => handleTemplateClick('Show token holder concentration for USDC')}
                />
                <QueryCard
                  icon={<MessageSquare className="h-5 w-5" />}
                  title="Transaction Analysis"
                  description="Examine any transaction"
                  onClick={() => handleTemplateClick('Analyze transaction: [enter transaction hash]')}
                />
                <QueryCard
                  icon={<Zap className="h-5 w-5" />}
                  title="Transaction Flow"
                  description="Trace transaction flow"
                  onClick={() => handleTemplateClick('Analyze transaction flow for: [enter transaction hash]')}
                />
                <QueryCard
                  icon={<Blocks className="h-5 w-5" />}
                  title="Block Information"
                  description="Get block details"
                  onClick={() => handleTemplateClick('What is in block number 19000000?')}
                />
                <QueryCard
                  icon={<Coins className="h-5 w-5" />}
                  title="NFT Holdings"
                  description="Check NFT collections"
                  onClick={() => handleTemplateClick('Show NFTs owned by [enter address]')}
                />
                <QueryCard
                  icon={<Wallet className="h-5 w-5" />}
                  title="Chain of Custody"
                  description="Trace fund flows"
                  onClick={() => handleTemplateClick('Trace chain of custody for wallet: [enter address]')}
                />
                <QueryCard
                  icon={<Activity className="h-5 w-5" />}
                  title="DeFi Analysis"
                  description="Analyze DeFi positions"
                  onClick={() => handleTemplateClick('Analyze DeFi activity for wallet: [enter address]')}
                />
                <QueryCard
                  icon={<TrendingUp className="h-5 w-5" />}
                  title="Token Transfers"
                  description="View transfer history"
                  onClick={() => handleTemplateClick('Show token transfers for [enter address]')}
                />
                <QueryCard
                  icon={<Sparkles className="h-5 w-5" />}
                  title="Network Status"
                  description="Check chain health"
                  onClick={() => handleTemplateClick('What is the current status of Ethereum?')}
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
            <LoadingState stage="thinking" message="Analyzing blockchain data..." />
          )}

          {error && (
            <ErrorDisplay 
              error={error} 
              onRetry={() => {
                // Retry last message
                const lastUserMessage = messages.filter(m => m.role === 'user').pop();
                if (lastUserMessage && 'text' in lastUserMessage) {
                  sendMessage({ text: lastUserMessage.text || '' });
                }
              }}
              showDetails={true}
            />
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
              chainId={chainId}
              onChainChange={setChainId}
            />
          </div>
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
      className="cursor-pointer hover:shadow-xl transition-all duration-200 hover:border-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-[1.02] group"
      onClick={onClick}
    >
      <CardContent className="p-6 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50 transition-colors">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

