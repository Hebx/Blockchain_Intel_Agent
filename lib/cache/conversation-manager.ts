import {
  getCacheManager,
  generateConversationCacheKey,
} from './cache-manager';
import { CACHE_TTL } from './ttl-config';

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  metadata?: any;
}

/**
 * Manages multi-turn conversation context in Redis
 */
export class ConversationManager {
  private cache = getCacheManager();

  /**
   * Save a message to conversation history
   */
  async saveMessage(
    conversationId: string,
    message: Message,
  ): Promise<void> {
    // Get existing messages
    const messages = await this.getHistory(conversationId);

    // Add new message
    messages.push(message);

    // Store updated history
    const cacheKey = generateConversationCacheKey(conversationId, 'history');
    await this.cache.set(cacheKey, messages, CACHE_TTL.CONVERSATION);
  }

  /**
   * Get conversation history
   */
  async getHistory(conversationId: string): Promise<Message[]> {
    const cacheKey = generateConversationCacheKey(conversationId, 'history');
    const messages = await this.cache.get<Message[]>(cacheKey);
    return messages || [];
  }

  /**
   * Get recent messages (last N messages)
   */
  async getRecentHistory(
    conversationId: string,
    count: number = 10,
  ): Promise<Message[]> {
    const messages = await this.getHistory(conversationId);
    return messages.slice(-count);
  }

  /**
   * Clear conversation history
   */
  async clearConversation(conversationId: string): Promise<void> {
    const cacheKey = generateConversationCacheKey(conversationId, 'history');
    await this.cache.del(cacheKey);
  }

  /**
   * Append context data to conversation
   */
  async appendContext(
    conversationId: string,
    context: any,
  ): Promise<void> {
    const cacheKey = generateConversationCacheKey(conversationId, 'context');
    await this.cache.set(cacheKey, context, CACHE_TTL.CONVERSATION);
  }

  /**
   * Get conversation context
   */
  async getContext(conversationId: string): Promise<any | null> {
    const cacheKey = generateConversationCacheKey(conversationId, 'context');
    return await this.cache.get(cacheKey);
  }

  /**
   * Check if conversation exists
   */
  async conversationExists(conversationId: string): Promise<boolean> {
    const cacheKey = generateConversationCacheKey(conversationId, 'history');
    return await this.cache.client.exists(cacheKey);
  }

  /**
   * Get conversation metadata
   */
  async getMetadata(conversationId: string): Promise<any | null> {
    const cacheKey = generateConversationCacheKey(conversationId, 'metadata');
    return await this.cache.get(cacheKey);
  }

  /**
   * Set conversation metadata
   */
  async setMetadata(
    conversationId: string,
    metadata: any,
  ): Promise<void> {
    const cacheKey = generateConversationCacheKey(conversationId, 'metadata');
    await this.cache.set(cacheKey, metadata, CACHE_TTL.CONVERSATION);
  }
}

// Singleton instance
let conversationManagerInstance: ConversationManager | null = null;

/**
 * Get or create conversation manager singleton
 */
export function getConversationManager(): ConversationManager {
  if (!conversationManagerInstance) {
    conversationManagerInstance = new ConversationManager();
  }
  return conversationManagerInstance;
}

