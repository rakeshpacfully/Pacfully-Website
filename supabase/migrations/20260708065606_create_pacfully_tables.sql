/*
# Create Pacfully contact, quote, and newsletter tables

1. New Tables
- `contacts`: stores contact form submissions (name, email, phone, company, subject, message)
- `quotes`: stores quote request submissions with optional artwork file metadata
- `newsletter`: stores newsletter email subscriptions
- `artwork_files`: stores uploaded artwork file binary data and metadata (replaces MongoDB GridFS)

2. Security
- Enable RLS on all tables.
- This is a no-auth public marketing site, so anon + authenticated CRUD is allowed (intentionally public/shared data).
- All policies use `TO anon, authenticated` so the anon-key client and backend can operate.

3. Important Notes
- Artwork files are stored as bytea in `artwork_files` since Supabase Storage is not used here.
- All tables have `created_at` defaults and uuid primary keys.
- Idempotent: uses IF NOT EXISTS and DROP POLICY IF EXISTS.
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  subject text NOT NULL DEFAULT '',
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_contacts" ON contacts;
CREATE POLICY "anon_select_contacts" ON contacts FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_contacts" ON contacts;
CREATE POLICY "anon_insert_contacts" ON contacts FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_contacts" ON contacts;
CREATE POLICY "anon_update_contacts" ON contacts FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contacts" ON contacts;
CREATE POLICY "anon_delete_contacts" ON contacts FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS artwork_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  filename text NOT NULL,
  content_type text NOT NULL DEFAULT 'application/octet-stream',
  data bytea NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE artwork_files ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_artwork_files" ON artwork_files;
CREATE POLICY "anon_select_artwork_files" ON artwork_files FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_artwork_files" ON artwork_files;
CREATE POLICY "anon_insert_artwork_files" ON artwork_files FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_artwork_files" ON artwork_files;
CREATE POLICY "anon_update_artwork_files" ON artwork_files FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_artwork_files" ON artwork_files;
CREATE POLICY "anon_delete_artwork_files" ON artwork_files FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  product_type text NOT NULL,
  quantity text NOT NULL,
  size text NOT NULL DEFAULT '',
  material text NOT NULL DEFAULT '',
  printing_type text NOT NULL DEFAULT '',
  finishing text NOT NULL DEFAULT '',
  timeline text NOT NULL DEFAULT '',
  notes text NOT NULL DEFAULT '',
  artwork_file_id uuid REFERENCES artwork_files(id) ON DELETE SET NULL,
  artwork_filename text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_quotes" ON quotes;
CREATE POLICY "anon_select_quotes" ON quotes FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_quotes" ON quotes;
CREATE POLICY "anon_insert_quotes" ON quotes FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_quotes" ON quotes;
CREATE POLICY "anon_update_quotes" ON quotes FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_quotes" ON quotes;
CREATE POLICY "anon_delete_quotes" ON quotes FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS newsletter (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_newsletter" ON newsletter;
CREATE POLICY "anon_select_newsletter" ON newsletter FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter;
CREATE POLICY "anon_insert_newsletter" ON newsletter FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_newsletter" ON newsletter;
CREATE POLICY "anon_update_newsletter" ON newsletter FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_newsletter" ON newsletter;
CREATE POLICY "anon_delete_newsletter" ON newsletter FOR DELETE
  TO anon, authenticated USING (true);
