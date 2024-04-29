import { SupportedStorage, createClient } from '@supabase/supabase-js';
import { MMKV } from 'react-native-mmkv';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@/constants/Config';

const storage = new MMKV({ id: 'supabase-storage' });

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

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: mmkvStorageConfig,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default supabase;
