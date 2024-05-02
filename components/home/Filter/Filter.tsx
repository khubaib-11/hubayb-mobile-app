import { View, Text } from '@tamagui/core';
import { TouchableOpacity } from 'react-native';

type FilterProps = {
  label: string;
  onPress: () => void;
};

export default function Filter({ label, onPress }: FilterProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
