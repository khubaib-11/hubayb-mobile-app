import { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, router } from 'expo-router';
import { TamaguiProvider } from '@tamagui/core';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/services/queryClient/queryClient';
import { useColorScheme } from '@/components/useColorScheme';
import { AuthContextProvider, useUser } from '@/context/authContext';
import config from '../tamagui.config';
import CartProvider from '@/context/cartContext';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// eslint-disable-next-line
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <TamaguiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <Stack>
              <Stack.Screen
                name="(tabs)"
                options={{
                  headerShown: false,
                  statusBarColor: 'black',
                }}
              />

              <Stack.Screen
                name="SignUp"
                options={{ presentation: 'modal' }}
              />
            </Stack>
          </CartProvider>
        </QueryClientProvider>
      </TamaguiProvider>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  const { isLoadingSession, session } = useUser();
  console.log(isLoadingSession, session);

  if (__DEV__) {
    require('../ReactotronConfig');
  }

  useEffect(() => {
    if (!isLoadingSession && !session) {
      router.push('/SignUp');
    }
  }, [isLoadingSession, session]);

  return (
    <AuthContextProvider>
      <RootLayoutNav />
    </AuthContextProvider>
  );
}
