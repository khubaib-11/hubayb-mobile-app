import { Alert, Button } from 'react-native';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from 'expo-router';
import { useForm } from 'react-hook-form';
import { X } from '@tamagui/lucide-icons';
import { H24 } from '@/components/common/Typography/Headings';
import Screen from '@/components/common/Screen/Screen';
import InputForm from '@/components/common/Inputs/InputForm/InputForm';
import Column from '@/components/common/Column/Column';
import ButtonFull from '@/components/common/Buttons/ButtonFull/ButtonFull';
const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  full_name: z.string().min(3, 'Name must be at least 3 characters long'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export default function SignUp() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data) {
    Alert.alert('Successful', JSON.stringify(data));
  }
  return (
    <Screen>
      <Stack.Screen
        options={{ headerLeft: () => <X size={24} />, headerTitle: '', headerShadowVisible: false }}
      />
      <H24 otherProps={{ fontSize: 24, fontWeight: '$medium' }}>Log in or sign up to Hubayb</H24>

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

      <ButtonFull />

      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      />
    </Screen>
  );
}
