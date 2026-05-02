/*
  # Create inquiries and newsletter subscribers tables

  1. New Tables
    - `inquiries` - Quick lead form submissions from homepage
      - `id` (uuid, primary key)
      - `name` (text, required) - Full name
      - `email` (text, required) - Email address
      - `phone` (text, required) - Phone number
      - `city` (text, optional) - City
      - `last_education` (text, optional) - Education level
      - `ielts_score` (text, optional) - IELTS score
      - `preferred_destination` (text, optional) - Preferred country
      - `created_at` (timestamptz) - Submission time

    - `newsletter_subscribers` - Email newsletter signups
      - `id` (uuid, primary key)
      - `email` (text, unique, required) - Subscriber email
      - `created_at` (timestamptz) - Signup time

    - `contact_messages` - Contact page form submissions
      - `id` (uuid, primary key)
      - `name` (text, required) - Sender name
      - `email` (text, required) - Sender email
      - `phone` (text, optional) - Phone number
      - `message` (text, required) - Message body
      - `created_at` (timestamptz) - Submission time

  2. Security
    - Enable RLS on all tables
    - Allow anonymous inserts for public form submissions
    - Restrict reads/updates/deletes to authenticated users
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  city text DEFAULT '',
  last_education text DEFAULT '',
  ielts_score text DEFAULT '',
  preferred_destination text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry"
  ON inquiries FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view inquiries"
  ON inquiries FOR SELECT TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscribers"
  ON newsletter_subscribers FOR SELECT TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can send a contact message"
  ON contact_messages FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact messages"
  ON contact_messages FOR SELECT TO authenticated
  USING (auth.uid() IS NOT NULL);
