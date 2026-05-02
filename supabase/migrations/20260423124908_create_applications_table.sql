/*
  # Create applications table for online study abroad applications

  1. New Tables
    - `applications`
      - `id` (uuid, primary key, auto-generated)
      - `first_name` (text, required) - Applicant's first name
      - `last_name` (text, required) - Applicant's last name
      - `email` (text, required) - Contact email
      - `phone` (text, required) - Contact phone number
      - `whatsapp` (text, optional) - WhatsApp number
      - `date_of_birth` (date, optional) - Date of birth
      - `gender` (text, optional) - Gender
      - `nationality` (text, optional) - Nationality
      - `city` (text, optional) - City of residence
      - `address` (text, optional) - Full address
      - `last_education` (text, optional) - Highest education level
      - `institution_name` (text, optional) - Name of last institution
      - `graduation_year` (integer, optional) - Year of graduation
      - `gpa_or_percentage` (text, optional) - GPA or percentage score
      - `ielts_score` (text, optional) - IELTS or English test score
      - `preferred_destination` (text, optional) - Preferred study country
      - `preferred_program` (text, optional) - Preferred field of study
      - `preferred_intake` (text, optional) - Preferred intake semester
      - `study_level` (text, optional) - Bachelor, Master, or PhD
      - `additional_notes` (text, optional) - Any additional notes
      - `status` (text, default 'new') - Application status for CRM integration
      - `created_at` (timestamptz, default now) - Submission timestamp
      - `updated_at` (timestamptz, default now) - Last update timestamp

  2. Security
    - Enable RLS on `applications` table
    - Allow anonymous inserts for public form submissions
    - Restrict read/update/delete to authenticated users (for future CRM/admin)
*/

CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  whatsapp text DEFAULT '',
  date_of_birth date,
  gender text DEFAULT '',
  nationality text DEFAULT '',
  city text DEFAULT '',
  address text DEFAULT '',
  last_education text DEFAULT '',
  institution_name text DEFAULT '',
  graduation_year integer,
  gpa_or_percentage text DEFAULT '',
  ielts_score text DEFAULT '',
  preferred_destination text DEFAULT '',
  preferred_program text DEFAULT '',
  preferred_intake text DEFAULT '',
  study_level text DEFAULT '',
  additional_notes text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
  ON applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update applications"
  ON applications
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete applications"
  ON applications
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);
