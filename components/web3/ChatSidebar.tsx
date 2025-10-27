'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Plus, MessageSquare, Trash2, Search, Download, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';
import ChainBadge from '@/components/web3/ChainBadge';

interface ChatHistory {
  id: string;
  title: string;
  preview: string;
  timestamp: number;
  chain_id?: number;
}

interface ChatSidebarProps {
  chats: ChatHistory[];
  currentChatId: string | null;
  onNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  onDeleteChat: (chatId: string) => void;
}

export default function ChatSidebar({
  chats,
  currentChatId,
  onNewChat,
  onSelectChat,
  onDeleteChat,
}: ChatSidebarProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (hours < 1) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  const groupChatsByDate = (chats: ChatHistory[]) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);

    return chats.reduce((groups, chat) => {
      const chatDate = new Date(chat.timestamp);
      
      if (chatDate >= today) {
        groups.Today.push(chat);
      } else if (chatDate >= yesterday) {
        groups.Yesterday.push(chat);
      } else if (chatDate >= weekAgo) {
        groups['Last 7 days'].push(chat);
      } else {
        groups.Older.push(chat);
      }
      
      return groups;
    }, {
      Today: [] as ChatHistory[],
      Yesterday: [] as ChatHistory[],
      'Last 7 days': [] as ChatHistory[],
      Older: [] as ChatHistory[],
    });
  };

  const filteredChats = useMemo(() => {
    if (!searchQuery) return chats;
    const query = searchQuery.toLowerCase();
    return chats.filter(chat => 
      chat.title.toLowerCase().includes(query) || 
      chat.preview.toLowerCase().includes(query)
    );
  }, [chats, searchQuery]);

  const groupedChats = useMemo(() => groupChatsByDate(filteredChats), [filteredChats]);

  const handleExportChat = async (chatId: string) => {
    // This would fetch the chat and messages, then export as JSON
    const chat = chats.find(c => c.id === chatId);
    if (!chat) return;
    
    const dataToExport = {
      ...chat,
      exportedAt: new Date().toISOString(),
    };
    
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${chat.title.replace(/[^a-z0-9]/gi, '_')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-80 border-r bg-gray-50 flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Chat History</h2>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setShowSearch(!showSearch)}
            >
              {showSearch ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        {showSearch && (
          <Input
            placeholder="Search chats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8"
            autoFocus
          />
        )}
        
        <Button onClick={onNewChat} className="w-full" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          New Chat
        </Button>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-4">
          {chats.length === 0 ? (
            <div className="text-center py-8 px-4">
              <MessageSquare className="h-12 w-12 mx-auto text-gray-300 mb-2" />
              <p className="text-sm text-gray-500">No chats yet</p>
              <p className="text-xs text-gray-400 mt-1">Start a new conversation</p>
            </div>
          ) : filteredChats.length === 0 ? (
            <div className="text-center py-8 px-4">
              <Search className="h-12 w-12 mx-auto text-gray-300 mb-2" />
              <p className="text-sm text-gray-500">No chats found</p>
              <p className="text-xs text-gray-400 mt-1">Try a different search</p>
            </div>
          ) : (
            Object.entries(groupedChats).map(([groupName, groupChats]) => {
              if (groupChats.length === 0) return null;
              
              return (
                <div key={groupName}>
                  <h3 className="text-xs font-semibold text-gray-500 mb-2 px-2 uppercase tracking-wide">
                    {groupName}
                  </h3>
                  <div className="space-y-2">
                    {groupChats.map((chat) => (
                      <Card
                        key={chat.id}
                        className={`cursor-pointer transition-all hover:shadow-md group ${
                          currentChatId === chat.id ? 'ring-2 ring-blue-500' : ''
                        }`}
                        onClick={() => onSelectChat(chat.id)}
                      >
                        <CardContent className="p-3">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <MessageSquare className="h-4 w-4 text-gray-500 flex-shrink-0" />
                                <p className="text-sm font-medium truncate">{chat.title}</p>
                              </div>
                              <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                                {chat.preview}
                              </p>
                              <div className="flex items-center gap-2">
                                {chat.chain_id && (
                                  <ChainBadge chainId={chat.chain_id} className="text-xs" />
                                )}
                                <p className="text-xs text-gray-400">{formatTime(chat.timestamp)}</p>
                              </div>
                            </div>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleExportChat(chat.id);
                                }}
                                title="Export chat"
                              >
                                <Download className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onDeleteChat(chat.id);
                                }}
                                title="Delete chat"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

