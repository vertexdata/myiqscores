-- Anonymous quiz results are no longer written directly from the browser.
-- Email requests go through the JWT-verified Edge Function, which validates,
-- rate-limits, checks suppression, and uses the service role server-side.

DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;
DROP POLICY IF EXISTS "Anyone can insert referrals" ON public.referrals;

REVOKE ALL ON TABLE public.leads FROM anon, authenticated;
REVOKE ALL ON TABLE public.referrals FROM anon, authenticated;
