import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Announcement = {
  id: string;
  title: string;
  body: string;
  image_url: string | null;
  link_url: string | null;
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
};
