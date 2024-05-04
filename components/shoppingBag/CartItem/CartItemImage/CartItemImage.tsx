import { Image } from 'expo-image';
import { View } from '@tamagui/core';

function CartItemImage({ imageUrl }: { imageUrl: string }) {
  return (
    <View
      w={80}
      h={80}
      bw={1.5}
      borderColor="$black30"
      borderRadius={4}
    >
      <Image
        style={{
          width: '100%',
          height: '100%',
        }}
        contentFit="contain"
        source={imageUrl}
      />
    </View>
  );
}

export default CartItemImage;
