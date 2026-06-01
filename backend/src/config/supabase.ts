import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();
let supabase: any;

export const initializeSupabase = () => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) throw new Error('Supabase credentials missing');
  supabase = createClient(supabaseUrl, supabaseKey);
  console.log('✅ Supabase connected');
};

export const getSupabase = () => supabase;