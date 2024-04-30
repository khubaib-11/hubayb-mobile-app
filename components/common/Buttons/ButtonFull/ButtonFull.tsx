import { View, Text } from '@tamagui/core';
import { P16 } from '../../Typography/Paragraph';
import { mvs } from 'react-native-size-matters';
import { H16 } from '../../Typography/Headings';

type ButtonProps = {
  label: string;
  disabled: boolean;
  onPress: () => void;
};

function ButtonFull({ label = 'Button name', disabled = false, onPress }: ButtonProps) {
  return (
    <View
      onPress={onPress ?? undefined}
      bg="$green90"
      py={mvs(12)}
      br={8}
      jc="center"
      ai="center"
      pressStyle={{ transform: [{ scale: 0.9 }] }}
    >
      <P16
        otherProps={{ fontWeight: '$medium', fontSize: 18, color: '$white', letterSpacing: 0.5 }}
      >
        {label}
      </P16>
    </View>
  );
}
export default ButtonFull;
