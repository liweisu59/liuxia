import { createClient } from "@supabase/supabase-js";

// Get the URL&key from .env.local
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey)