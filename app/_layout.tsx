import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import { useColorScheme } from '@/components/useColorScheme';
import { TamaguiProvider } from '@tamagui/core';
import config from '../tamagui.config';
import supabase from '@/services/supabase/supabase';
import { Session } from '@supabase/supabase-js';
import { ToastAndroid } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// eslint-disable-next-line
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  const [hasSession, setHasSession] = useState(false);
  const colorScheme = useColorScheme();

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setIsLoadingSession(false);
        if (session) {
          setHasSession(true);
          SplashScreen.hideAsync();
          ToastAndroid.show('✅ Session found', 2000);
        } else {
          setHasSession(false);
          ToastAndroid.show('❌ Session not found', 2000);
          SplashScreen.hideAsync();
          router.replace('/SignUp');
        }
      })
      .catch((e) => ToastAndroid.show(e.message, 3000));
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <TamaguiProvider config={config}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="signUp"
            options={{ presentation: 'modal' }}
          />
        </Stack>
      </TamaguiProvider>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return <RootLayoutNav />;
}
