import React from 'react';
import { View } from '@tamagui/core';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Screen({ children }: { children: React.ReactNode }) {
  const { top, bottom, left, right } = useSafeAreaInsets();
  return (
    <View
      f={1}
      mt={top}
      mb={bottom}
      ml={left}
      mr={right}
    >
      {children}
    </View>
  );
}

export default Screen;
