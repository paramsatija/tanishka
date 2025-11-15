import { createClient } from '@supabase/supabase-js';

// Make Supabase optional - use dummy values if env vars not set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Only create real client if proper credentials exist
const hasValidCredentials = 
  process.env.NEXT_PUBLIC_SUPABASE_URL && 
  process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co';

export const supabase = hasValidCredentials 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const isSupabaseConfigured = hasValidCredentials;

export type ContactSubmission = {
  id?: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  product_interest: string;
  volume: string;
  message: string;
  status?: string;
  created_at?: string;
};

export type SampleKitRequest = {
  id?: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  product_sku: string;
  quantity: string;
  shipping_address: string;
  message: string;
  status?: string;
  created_at?: string;
};
