
-- Create members table
CREATE TABLE public.members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  member_no TEXT NOT NULL UNIQUE,
  id_number TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  membership_type TEXT NOT NULL CHECK (membership_type IN ('18+', 'junior')),
  photo_url TEXT,
  date_joined DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;

-- Users can view their own member record
CREATE POLICY "Users can view own member" ON public.members FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own member record
CREATE POLICY "Users can create own member" ON public.members FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can update their own member record
CREATE POLICY "Users can update own member" ON public.members FOR UPDATE USING (auth.uid() = user_id);

-- Public can verify members by member_no
CREATE POLICY "Public can verify members" ON public.members FOR SELECT TO anon USING (true);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_members_updated_at
  BEFORE UPDATE ON public.members
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Member number generator function
CREATE OR REPLACE FUNCTION public.generate_member_number()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  seq_num INT;
  year_suffix TEXT;
  member_number TEXT;
BEGIN
  SELECT COALESCE(MAX(CAST(SUBSTRING(member_no FROM 7 FOR 4) AS INT)), 0) + 1
  INTO seq_num FROM public.members;
  
  year_suffix := TO_CHAR(NOW(), 'YY');
  member_number := 'MBWUF-' || LPAD(seq_num::TEXT, 4, '0') || '-' || year_suffix;
  RETURN member_number;
END;
$$;

-- Storage bucket for member photos
INSERT INTO storage.buckets (id, name, public) VALUES ('member-photos', 'member-photos', true);

CREATE POLICY "Anyone can view member photos" ON storage.objects FOR SELECT USING (bucket_id = 'member-photos');

CREATE POLICY "Authenticated users can upload photos" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'member-photos' AND auth.role() = 'authenticated');

CREATE POLICY "Users can update their own photos" ON storage.objects FOR UPDATE USING (bucket_id = 'member-photos' AND auth.role() = 'authenticated');

-- User roles table for admin
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can view own roles" ON public.user_roles FOR SELECT USING (auth.uid() = user_id);

-- Admin policies for members table
CREATE POLICY "Admins can do anything with members" ON public.members FOR ALL USING (public.has_role(auth.uid(), 'admin'));
