import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';

const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE || '';

const supabase = createClient(supabaseURL, supabaseServiceRole);

export { supabase };
