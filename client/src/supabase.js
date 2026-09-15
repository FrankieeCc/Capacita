import { createClient } from '@supabase/supabase-js'

// Importamos las variables de tu archivo .env.local (la forma correcta en Vite)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

// Creamos y exportamos la conexión activa
export const supabase = createClient(supabaseUrl, supabaseAnonKey)