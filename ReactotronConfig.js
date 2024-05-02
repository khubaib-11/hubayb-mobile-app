import Reactotron from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import { storage } from './services/supabase/supabase.ts';
import { QueryClientManager, reactotronReactQuery } from 'reactotron-react-query';
import { queryClient } from './services/queryClient/queryClient.ts';

const queryClientManager = new QueryClientManager({
  // @ts-ignore
  queryClient,
});

Reactotron
  // .use(reactotronReactQuery(queryClientManager))
  .configure({
    // onDisconnect: () => {
    //   queryClientManager.unsubscribe();
    // },
  })
  .use(mmkvPlugin({ storage }))
  .useReactNative()
  .connect();
