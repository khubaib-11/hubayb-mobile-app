import { View } from '@tamagui/core';
import { StyleSheet, TextInput } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import { Control, Controller } from 'react-hook-form';
import Column from '../../Column/Column';
import { L16 } from '../../Typography/Labels';

type InputProps = {
  label: string;
  placeholder: string;
  control: Control;
  name: string;
};

export default function InputForm({
  label = 'No label',
  placeholder = 'Empty placeholder',
  control,
  name,
}: InputProps) {
  return (
    <Column gap={4}>
      <L16>{label}</L16>
      <Input
        placeholder={placeholder}
        name={name}
        control={control}
      />
    </Column>
  );
}

function Input({
  placeholder,
  control,
  name,
}: {
  placeholder: string;
  control: Control;
  name: string;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View
          bg="$red10"
          bbrr={8}
          bblr={8}
          pb={4}
        >
          <View
            borderWidth={1.5}
            borderColor={error ? '$red90' : '$gray40'}
            borderRadius={8}
            // for removing input white background color from borders
            ov="hidden"
          >
            <TextInput
              placeholder={placeholder}
              style={styles.input}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          </View>
          <View
            pl={2}
            pt={4}
          >
            {error && (
              <L16 otherProps={{ color: '$red90' }}>
                {error.message ? error.message : `${name} is invalid`}
              </L16>
            )}
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: ms(10),
    paddingVertical: mvs(12),
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
  },
});
