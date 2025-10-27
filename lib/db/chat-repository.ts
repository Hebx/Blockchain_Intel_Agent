/**
 * Chat Repository - CRUD operations for chats and messages
 * Provides abstraction layer over Supabase storage with fallback to localStorage
 */

import { createBrowserSupabaseClient, isSupabaseConfigured } from './supabase';
import type { Database } from './supabase';

type Chat = Database['public']['Tables']['chats']['Row'];
type Message = Database['public']['Tables']['messages']['Row'];
type ChatInsert = Database['public']['Tables']['chats']['Insert'];
type MessageInsert = Database['public']['Tables']['messages']['Insert'];

export interface ChatWithMetadata {
  id: string;
  title: string;
  preview: string | null;
  chain_id: number;
  created_at: number;
  updated_at: number;
  message_count?: number;
}

export interface MessageWithMetadata {
  id: string;
  chat_id: string;
  role: 'user' | 'assistant';
  content: string;
  chain_id: number | null;
  metadata: any;
  created_at: number;
}

export class ChatRepository {
  private supabase = createBrowserSupabaseClient();
  private useSupabase = isSupabaseConfigured();

  /**
   * Create a new chat
   */
  async createChat(title: string, preview: string | null, chainId: number = 1): Promise<ChatWithMetadata> {
    const chatId = `chat_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const now = Date.now();
    
    const chatData: ChatInsert = {
      id: chatId,
      title,
      preview,
      chain_id: chainId,
    };

    if (this.useSupabase && this.supabase) {
      try {
        const { data, error } = await this.supabase
          .from('chats')
          .insert(chatData)
          .select()
          .single();

        if (error) throw error;

        // Also cache in localStorage
        const localChats = this.getLocalChats();
        localChats.push({
          id: chatId,
          title,
          preview: preview || '',
          timestamp: now,
          chain_id: chainId,
        });
        localStorage.setItem('web3_agent_chats', JSON.stringify(localChats));

        return {
          id: chatId,
          title: data.title,
          preview: data.preview,
          chain_id: data.chain_id,
          created_at: new Date(data.created_at).getTime(),
          updated_at: new Date(data.updated_at).getTime(),
        };
      } catch (error) {
        console.error('Failed to create chat in Supabase:', error);
        // Fall through to localStorage
      }
    }

    // Fallback to localStorage
    const localChats = this.getLocalChats();
    localChats.push({
      id: chatId,
      title,
      preview: preview || '',
      timestamp: now,
      chain_id: chainId,
    });
    localStorage.setItem('web3_agent_chats', JSON.stringify(localChats));

    return {
      id: chatId,
      title,
      preview,
      chain_id: chainId,
      created_at: now,
      updated_at: now,
    };
  }

  /**
   * Get all chats, sorted by updated_at DESC
   */
  async getChats(limit: number = 50, offset: number = 0): Promise<ChatWithMetadata[]> {
    if (this.useSupabase && this.supabase) {
      try {
        const { data, error } = await this.supabase
          .from('chats')
          .select('*')
          .order('updated_at', { ascending: false })
          .range(offset, offset + limit - 1);

        if (error) throw error;

        if (data && data.length > 0) {
          // Also update localStorage cache
          const localChats = data.map(chat => ({
            id: chat.id,
            title: chat.title,
            preview: chat.preview || '',
            timestamp: new Date(chat.updated_at).getTime(),
            chain_id: chat.chain_id,
          }));
          localStorage.setItem('web3_agent_chats', JSON.stringify(localChats));

          return data.map(chat => ({
            id: chat.id,
            title: chat.title,
            preview: chat.preview,
            chain_id: chat.chain_id,
            created_at: new Date(chat.created_at).getTime(),
            updated_at: new Date(chat.updated_at).getTime(),
          }));
        }
      } catch (error) {
        console.error('Failed to fetch chats from Supabase:', error);
        // Fall through to localStorage
      }
    }

    // Fallback to localStorage
    const localChats = this.getLocalChats();
    return localChats
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(offset, offset + limit)
      .map(chat => ({
        id: chat.id,
        title: chat.title,
        preview: chat.preview,
        chain_id: chat.chain_id || 1,
        created_at: chat.timestamp,
        updated_at: chat.timestamp,
      }));
  }

  /**
   * Get a single chat by ID
   */
  async getChat(chatId: string): Promise<ChatWithMetadata | null> {
    if (this.useSupabase && this.supabase) {
      try {
        const { data, error } = await this.supabase
          .from('chats')
          .select('*')
          .eq('id', chatId)
          .single();

        if (error) throw error;
        if (!data) return null;

        return {
          id: data.id,
          title: data.title,
          preview: data.preview,
          chain_id: data.chain_id,
          created_at: new Date(data.created_at).getTime(),
          updated_at: new Date(data.updated_at).getTime(),
        };
      } catch (error) {
        console.error('Failed to fetch chat from Supabase:', error);
      }
    }

    // Fallback to localStorage
    const localChats = this.getLocalChats();
    const chat = localChats.find(c => c.id === chatId);
    if (!chat) return null;

    return {
      id: chat.id,
      title: chat.title,
      preview: chat.preview,
      chain_id: chat.chain_id || 1,
      created_at: chat.timestamp,
      updated_at: chat.timestamp,
    };
  }

  /**
   * Update chat metadata (title, preview, etc.)
   */
  async updateChat(chatId: string, updates: Partial<Pick<ChatWithMetadata, 'title' | 'preview' | 'chain_id'>>): Promise<void> {
    if (this.useSupabase && this.supabase) {
      try {
        const { error } = await this.supabase
          .from('chats')
          .update({
            title: updates.title,
            preview: updates.preview || null,
            chain_id: updates.chain_id,
            updated_at: new Date().toISOString(),
          })
          .eq('id', chatId);

        if (error) throw error;
      } catch (error) {
        console.error('Failed to update chat in Supabase:', error);
      }
    }

    // Update localStorage
    const localChats = this.getLocalChats();
    const index = localChats.findIndex(c => c.id === chatId);
    if (index !== -1) {
      localChats[index] = {
        ...localChats[index],
        ...updates,
      };
      localStorage.setItem('web3_agent_chats', JSON.stringify(localChats));
    }
  }

  /**
   * Delete a chat and all its messages
   */
  async deleteChat(chatId: string): Promise<void> {
    if (this.useSupabase && this.supabase) {
      try {
        const { error } = await this.supabase
          .from('chats')
          .delete()
          .eq('id', chatId);

        if (error) throw error;
      } catch (error) {
        console.error('Failed to delete chat from Supabase:', error);
      }
    }

    // Update localStorage
    const localChats = this.getLocalChats();
    const filtered = localChats.filter(c => c.id !== chatId);
    localStorage.setItem('web3_agent_chats', JSON.stringify(filtered));
  }

  /**
   * Save a message to a chat
   */
  async saveMessage(chatId: string, message: Omit<MessageInsert, 'chat_id' | 'id'>): Promise<void> {
    const messageId = `msg_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    
    if (this.useSupabase && this.supabase) {
      try {
        const { error } = await this.supabase
          .from('messages')
          .insert({
            id: messageId,
            ...message,
            chat_id: chatId,
            created_at: new Date().toISOString(),
          });

        if (error) throw error;
      } catch (error) {
        console.error('Failed to save message to Supabase:', error);
        // Don't throw - will fall back to localStorage
      }
    }

    // Also cache in localStorage
    const storageKey = `web3_chat_${chatId}`;
    const existingMessages = this.getLocalMessages(chatId);
    existingMessages.push({
      id: messageId,
      ...message,
      chat_id: chatId,
      created_at: Date.now(),
    });
    localStorage.setItem(storageKey, JSON.stringify(existingMessages));
  }

  /**
   * Get all messages for a chat
   */
  async getMessages(chatId: string): Promise<MessageWithMetadata[]> {
    if (this.useSupabase && this.supabase) {
      try {
        const { data, error } = await this.supabase
          .from('messages')
          .select('*')
          .eq('chat_id', chatId)
          .order('created_at', { ascending: true });

        if (error) throw error;
        if (data) {
          // Cache in localStorage
          const storageKey = `web3_chat_${chatId}`;
          localStorage.setItem(storageKey, JSON.stringify(data));

          return data.map(msg => ({
            id: msg.id,
            chat_id: msg.chat_id,
            role: msg.role,
            content: msg.content,
            chain_id: msg.chain_id,
            metadata: msg.metadata,
            created_at: new Date(msg.created_at).getTime(),
          }));
        }
      } catch (error) {
        console.error('Failed to fetch messages from Supabase:', error);
      }
    }

    // Fallback to localStorage
    return this.getLocalMessages(chatId);
  }

  /**
   * Get local chats from localStorage
   */
  private getLocalChats(): Array<{
    id: string;
    title: string;
    preview: string;
    timestamp: number;
    chain_id?: number;
  }> {
    try {
      const stored = localStorage.getItem('web3_agent_chats');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to parse localStorage chats:', e);
    }
    return [];
  }

  /**
   * Get local messages from localStorage
   */
  private getLocalMessages(chatId: string): MessageWithMetadata[] {
    try {
      const storageKey = `web3_chat_${chatId}`;
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const messages = JSON.parse(stored);
        return messages.map((msg: any) => ({
          id: msg.id,
          chat_id: msg.chat_id,
          role: msg.role,
          content: msg.content,
          chain_id: msg.chain_id,
          metadata: msg.metadata || {},
          created_at: msg.created_at || new Date(msg.created_at).getTime(),
        }));
      }
    } catch (e) {
      console.error('Failed to parse localStorage messages:', e);
    }
    return [];
  }
}

// Export singleton instance
export const chatRepository = new ChatRepository();

