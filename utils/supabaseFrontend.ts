import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON || '';

const supabase = createClient(supabaseURL, supabaseAnon);

export { supabase };
