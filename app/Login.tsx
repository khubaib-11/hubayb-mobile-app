import Column from '@/components/common/Column/Column';
import InputForm from '@/components/common/Inputs/InputForm/InputForm';
import { H24 } from '@/components/common/Typography/Headings';
import { L16 } from '@/components/common/Typography/Labels';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from '@tamagui/lucide-icons';
import { Stack, router } from 'expo-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from '@tamagui/core';
import { z } from 'zod';
import Screen from '@/components/common/Screen/Screen';
import ButtonFull from '@/components/common/Buttons/ButtonFull/ButtonFull';
import { Alert } from 'react-native';
import supabase from '@/services/supabase/supabase';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export default function Login() {
  const [apiMsg, setApiMsg] = useState('');
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(fromData) {
    Alert.alert(JSON.stringify(fromData));
    // To remove any previous message
    setApiMsg('');
    try {
      const {
        data: { session, user },
        error,
      } = await supabase.auth.signInWithPassword({
        email: fromData.email,
        password: fromData.password,
      });

      if (session && user) {
        // login successful
        router.replace('/(tabs)/');
      }

      if (error) {
        throw error;
      }
    } catch (error) {
      setApiMsg(
        `${error?.message}. Please check you email and password` ?? 'Invalid Email or Password',
      );
    }
  }

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerLeft: () => <X size={24} />,
          headerTitle: '',
          headerShadowVisible: false,
        }}
      />
      <H24 otherProps={{ fontSize: 24, fontWeight: '$medium', mt: 8, mb: 16 }}>
        Log in to Hubayb
      </H24>

      <Column gap={8}>
        <InputForm
          label="Email"
          placeholder="Email"
          control={control}
          name="email"
        />
        <InputForm
          label="Password"
          placeholder="Password"
          control={control}
          name="password"
        />
      </Column>

      {apiMsg && (
        <View
          bg="$red10"
          br={8}
          py={8}
          px={4}
          jc="center"
          ai="center"
        >
          <L16 otherProps={{ color: '$red90' }}>{apiMsg}</L16>
        </View>
      )}

      <View mt={24}>
        <ButtonFull
          onPress={handleSubmit(onSubmit)}
          label="Log in"
        />
      </View>
    </Screen>
  );
}
