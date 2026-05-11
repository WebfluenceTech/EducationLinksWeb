-- Create inquiries table
CREATE TABLE IF NOT EXISTS public.inquiries (
  id                   uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  name                 text        NOT NULL,
  email                text        NOT NULL,
  phone                text        NOT NULL,
  city                 text,
  last_education       text,
  ielts_score          text,
  preferred_destination text,
  created_at           timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to INSERT (submit a form)
CREATE POLICY "allow_public_insert"
  ON public.inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (admins) can SELECT
CREATE POLICY "allow_authenticated_select"
  ON public.inquiries
  FOR SELECT
  TO authenticated
  USING (true);
