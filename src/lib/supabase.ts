import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/*
 * Fall back to harmless placeholder credentials when env vars are absent
 * (e.g. local preview without a .env). This keeps the app from white-screening
 * on boot; live form submissions still require real credentials to succeed.
 */
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'public-anon-placeholder-key',
);
