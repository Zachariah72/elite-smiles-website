DROP POLICY IF EXISTS "Users can update their own photos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload photos" ON storage.objects;
CREATE POLICY "Members upload own photos" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'member-photos' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "Members update own photos" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'member-photos' AND (storage.foldername(name))[1] = auth.uid()::text) WITH CHECK (bucket_id = 'member-photos' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE OR REPLACE FUNCTION public.validate_engagement_submission() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
IF NEW.kind IN ('application','event') THEN
  PERFORM pg_advisory_xact_lock(hashtext(NEW.kind || NEW.content_id::text || lower(NEW.email)));
  IF EXISTS (SELECT 1 FROM public.engagement_submissions WHERE kind=NEW.kind AND content_id=NEW.content_id AND lower(email)=lower(NEW.email)) THEN RAISE EXCEPTION 'You have already submitted for this opportunity or event. Contact Mabawa if you need to update your submission.'; END IF;
END IF;
IF NEW.payload ? 'document_path' AND (NEW.payload->>'document_path') !~ '^submissions/[0-9a-f-]{36}/[0-9a-f-]{36}\.(pdf|doc|docx|jpg|jpeg|png|webp)$' THEN RAISE EXCEPTION 'Invalid document reference'; END IF;
RETURN NEW;
END $$;
CREATE TRIGGER validate_engagement_before_insert BEFORE INSERT ON public.engagement_submissions FOR EACH ROW EXECUTE FUNCTION public.validate_engagement_submission();