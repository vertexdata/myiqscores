-- The live app inserts leads.newsletter_opt_in (see Results.tsx inline email
-- capture and src/integrations/supabase/types.ts, generated from the previous
-- production database). The column predates the migration files; add it so a
-- fresh database matches the code.
DO $$ BEGIN
  ALTER TABLE public.leads ADD COLUMN newsletter_opt_in BOOLEAN;
EXCEPTION WHEN duplicate_column THEN NULL;
END $$;
