import { View, Text } from '@tamagui/core';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import { Pressable } from 'react-native';
import { Plus } from '@tamagui/lucide-icons';
import Column from '@/components/common/Column/Column';

export default function ProductCardSkeleton() {
  return (
    <Column
      alignSelf="baseline"
      borderWidth={moderateScale(0.5)}
      borderRadius={moderateScale(8)}
      boc="$black30"
    >
      <View
        bg="$skeleton"
        w={moderateScale(100)}
        h={moderateScale(100)}
        br={moderateScale(8)}
      />
      <View
        pos="absolute"
        top={moderateScale(8)}
        right={moderateScale(8)}
      />
      <View
        px={scale(8)}
        py={verticalScale(8)}
        gap={verticalScale(16)}
      >
        <Column gap={verticalScale(4)}>
          <View
            bg="$skeleton"
            h={moderateVerticalScale(20)}
            w="70%"
            br={moderateScale(3)}
          />
          <View
            bg="$skeleton"
            h={moderateVerticalScale(20)}
            w="50%"
            br={moderateScale(3)}
          />
          <View
            bg="$skeleton"
            h={moderateVerticalScale(20)}
            w="70%"
            br={moderateScale(3)}
          />
        </Column>
        <Pressable>
          <View
            bg="$skeleton"
            py={verticalScale(8)}
            br={moderateScale(8)}
            jc="center"
            ai="center"
          >
            <Plus
              size={24}
              color="$white"
            />
          </View>
        </Pressable>
      </View>
    </Column>
  );
}
