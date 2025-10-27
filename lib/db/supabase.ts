/**
 * Supabase client configuration
 */

import { createClient } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';

// Type definitions for our database
export interface Database {
  public: {
    Tables: {
      chats: {
        Row: {
          id: string;
          title: string;
          preview: string | null;
          chain_id: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          title: string;
          preview?: string | null;
          chain_id?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          preview?: string | null;
          chain_id?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      messages: {
        Row: {
          id: string;
          chat_id: string;
          role: 'user' | 'assistant';
          content: string;
          chain_id: number | null;
          metadata: any;
          created_at: string;
        };
        Insert: {
          id: string;
          chat_id: string;
          role: 'user' | 'assistant';
          content: string;
          chain_id?: number | null;
          metadata?: any;
          created_at?: string;
        };
        Update: {
          id?: string;
          chat_id?: string;
          role?: 'user' | 'assistant';
          content?: string;
          chain_id?: number | null;
          metadata?: any;
          created_at?: string;
        };
      };
    };
  };
}

// Get Supabase URL and key from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Chat persistence will fall back to localStorage.');
}

/**
 * Server-side Supabase client
 * Use this in API routes and server components
 */
export function createServerClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  
  return createClient<Database>(supabaseUrl, supabaseAnonKey);
}

/**
 * Browser-side Supabase client
 * Use this in client components
 */
export function createBrowserSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  
  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
}

/**
 * Helper to check if Supabase is configured
 */
export function isSupabaseConfigured(): boolean {
  return !!(supabaseUrl && supabaseAnonKey);
}

