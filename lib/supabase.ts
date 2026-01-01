
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ehjgtcekptmpkgqxodeb.supabase.co';
// Replace with your actual Supabase Anon Key
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
