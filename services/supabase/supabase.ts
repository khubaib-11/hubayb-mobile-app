import { SupportedStorage, createClient } from '@supabase/supabase-js';
import { MMKV } from 'react-native-mmkv';
import { Database } from './supabaseTypes';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@/constants/Config';

export const storage = new MMKV({ id: 'supabase-storage' });
const mmkvStorageConfig: SupportedStorage = {
  async setItem(key, data) {
    storage.set(key, data);
  },
  async getItem(key) {
    return storage.getString(key) || null;
  },
  async removeItem(key) {
    storage.delete(key);
  },
};

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: mmkvStorageConfig,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default supabase;
