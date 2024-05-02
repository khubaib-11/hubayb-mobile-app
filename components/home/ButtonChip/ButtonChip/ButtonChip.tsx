import { View } from '@tamagui/core';
import { L16 } from '@/components/common/Typography/Labels';
import { ms16, ms44 } from '@/constants/responsiveUnits';
import { useEffect } from 'react';

type ButtonChipProps = {
  chipLabel: string;
  active: boolean;
  onPress: () => void;
};

export default function ButtonChip({ chipLabel = 'No label', active, onPress }: ButtonChipProps) {
  return (
    <View
      onPress={onPress}
      px={ms16}
      h={ms44}
      br={100}
      bw={1}
      borderColor="$black"
      jc="center"
      ai="center"
      bg={active ? '$black' : '$white'}
    >
      <L16 otherProps={{ color: active ? '$white' : '$black' }}>{chipLabel}</L16>
    </View>
  );
}
