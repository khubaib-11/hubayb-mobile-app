import { View, Text } from '@tamagui/core';
import { P16 } from '../../Typography/Paragraph';

type ButtonProps = {
  label: string;
  disabled: boolean;
  onPress: () => void;
};

function ButtonFull({ label = 'Button name', disabled = false, onPress }: ButtonProps) {
  return (
    <View onPress={onPress ?? undefined}>
      <P16>{label}</P16>
    </View>
  );
}
export default ButtonFull;
