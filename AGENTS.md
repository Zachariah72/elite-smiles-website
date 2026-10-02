# Project architecture rules

- Keep public content and engagement submissions in Lovable Cloud tables protected by explicit grants and row-level policies, because administrators must update the platform without code changes.
- Derive public opportunity availability from publication state and deadline, because expired listings must close automatically and reject late applications.
- Keep applicant documents in a private storage bucket readable only by server-validated administrators, because CVs contain personal information.
- Reuse the existing `has_role` database function for authorization, because client-side admin checks are not a security boundary.
- Treat configured payment methods as instructions and support-intent records until a real payment provider is connected, because the site must never simulate transactions.
