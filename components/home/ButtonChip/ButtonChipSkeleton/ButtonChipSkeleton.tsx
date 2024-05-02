import { View } from '@tamagui/core';
import { ms16, ms44 } from '@/constants/responsiveUnits';

export default function ButtonChipSkeleton() {
  return (
    <View
      w={80}
      h={ms44}
      br={100}
      bg="$skeleton"
    />
  );
}
