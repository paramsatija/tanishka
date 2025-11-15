/*
  # Create Contact and Sample Kit Submission Tables

  ## New Tables
  
  ### `contact_submissions`
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text) - Contact person's full name
  - `company` (text) - Company name
  - `email` (text) - Email address
  - `phone` (text) - Phone number
  - `product_interest` (text) - Product category or SKU of interest
  - `volume` (text) - Estimated volume requirement
  - `message` (text) - Additional message or inquiry
  - `created_at` (timestamptz) - Submission timestamp
  - `status` (text) - Submission status (new, contacted, resolved)

  ### `sample_kit_requests`
  - `id` (uuid, primary key) - Unique identifier for each request
  - `name` (text) - Requester's full name
  - `company` (text) - Company name
  - `email` (text) - Email address
  - `phone` (text) - Phone number
  - `product_sku` (text) - Product SKU for sample
  - `quantity` (text) - Sample quantity requested (minimum 5kg)
  - `shipping_address` (text) - Complete shipping address
  - `message` (text) - Additional notes
  - `created_at` (timestamptz) - Request timestamp
  - `status` (text) - Request status (pending, shipped, delivered)

  ## Security
  - Enable RLS on both tables
  - Add policies for authenticated admin users to read all submissions
  - Allow anonymous users to insert submissions (public forms)
  
  ## Important Notes
  1. Tables use UUID primary keys with automatic generation
  2. All text fields are NOT NULL to ensure data integrity
  3. Timestamps default to current time
  4. Status fields default to 'new' and 'pending' respectively
  5. RLS is enabled but allows public inserts for form submissions
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  product_interest text NOT NULL,
  volume text NOT NULL,
  message text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create sample_kit_requests table
CREATE TABLE IF NOT EXISTS sample_kit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  product_sku text NOT NULL,
  quantity text NOT NULL,
  shipping_address text NOT NULL,
  message text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE sample_kit_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert contact submissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anonymous users to insert sample kit requests
CREATE POLICY "Anyone can request sample kits"
  ON sample_kit_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to view all contact submissions
CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to view all sample kit requests
CREATE POLICY "Authenticated users can view sample kit requests"
  ON sample_kit_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update status of submissions
CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to update status of sample requests
CREATE POLICY "Authenticated users can update sample kit requests"
  ON sample_kit_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
  ON contact_submissions(status);

CREATE INDEX IF NOT EXISTS idx_sample_kit_requests_created_at 
  ON sample_kit_requests(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_sample_kit_requests_status 
  ON sample_kit_requests(status);
