import Reactotron from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import { storage } from './services/supabase/supabase.ts';

Reactotron.configure().use(mmkvPlugin({ storage })).useReactNative().connect();
