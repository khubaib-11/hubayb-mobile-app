import ButtonFull from '@/components/common/Buttons/ButtonFull/ButtonFull';
import Column from '@/components/common/Column/Column';
import InputForm from '@/components/common/Inputs/InputForm/InputForm';
import Screen from '@/components/common/Screen/Screen';
import { H24 } from '@/components/common/Typography/Headings';
import { L16 } from '@/components/common/Typography/Labels';
import { P16 } from '@/components/common/Typography/Paragraph';
import supabase from '@/services/supabase/supabase';
import { zodResolver } from '@hookform/resolvers/zod';
import { View } from '@tamagui/core';
import { X } from '@tamagui/lucide-icons';
import { Stack, router } from 'expo-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  full_name: z.string().min(3, 'Name must be at least 3 characters long'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export default function SignUp() {
  const [signUpErrorMsg, setSignUpErrorMsg] = useState('');
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      full_name: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  function handleLoginPress() {
    router.push('/Login');
  }

  async function onSubmit(fromData) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: fromData.email,
        password: fromData.password,
        options: {
          data: {
            user_name: fromData.full_name,
          },
        },
      });

      if (data) {
        console.log(data);
        router.replace('/(tabs)/');
      }

      if (error) {
        throw error;
      }
    } catch (error: any) {
      setSignUpErrorMsg(
        `${error?.message} .Try using different email. Or login instead.` ??
          'Email is already in use. Use different email. Or login instead',
      );
    }
  }
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stack.Screen
          options={{
            headerLeft: () => <X size={24} />,
            headerTitle: '',
            headerShadowVisible: false,
          }}
        />
        <H24 otherProps={{ fontSize: 24, fontWeight: '$medium', mt: 8, mb: 16 }}>
          Log in or sign up to Hubayb
        </H24>

        <Column gap={8}>
          <InputForm
            label="Name"
            placeholder="Name"
            control={control}
            name="full_name"
          />
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

        {signUpErrorMsg && (
          <View
            bg="$red10"
            br={8}
            py={8}
            jc="center"
            ai="center"
          >
            <L16 otherProps={{ color: '$red90' }}>{signUpErrorMsg}</L16>
          </View>
        )}

        <View mt={24}>
          <ButtonFull
            onPress={handleSubmit(onSubmit)}
            label="Create Account"
          />
        </View>

        <View
          mt={24}
          ai="center"
          py={16}
          onPress={handleLoginPress}
        >
          <P16 otherProps={{ color: '$inactive' }}>Already have account? Log in</P16>
        </View>
      </ScrollView>
    </Screen>
  );
}
