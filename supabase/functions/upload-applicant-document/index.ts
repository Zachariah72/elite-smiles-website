import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { getApplicantFileExtension } from './validation.ts';

function jsonResponse(body: Record<string, string>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (request: Request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed.' }, 405);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return jsonResponse({ error: 'Choose a supported file smaller than 5 MB.' }, 400);
  }

  const file = form.get('file');
  if (!(file instanceof File)) {
    return jsonResponse({ error: 'Choose a supported file smaller than 5 MB.' }, 400);
  }

  const extension = await getApplicantFileExtension(file);
  if (!extension) {
    return jsonResponse({ error: 'Choose a supported file smaller than 5 MB.' }, 400);
  }

  const projectUrl = Deno.env.get('SUPABASE_URL');
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!projectUrl || !serviceKey) {
    return jsonResponse({ error: 'The document could not be uploaded. Please try again.' }, 500);
  }

  const storage = createClient(projectUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  }).storage;
  const path = `submissions/${crypto.randomUUID()}/${crypto.randomUUID()}.${extension}`;
  const { error } = await storage.from('applicant-documents').upload(path, file, {
    cacheControl: '3600',
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    return jsonResponse({ error: 'The document could not be uploaded. Please try again.' }, 500);
  }

  return jsonResponse({ path });
});