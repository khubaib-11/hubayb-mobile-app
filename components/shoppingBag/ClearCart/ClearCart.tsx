import { View } from '@tamagui/core';
import { H16 } from '@/components/common/Typography/Headings';
import { ms4, ms8, mvs4 } from '@/constants/responsiveUnits';
import { useCart } from '@/context/cartContext';

export default function ClearCart() {
  const { clearCart } = useCart();

  return (
    <View onPress={clearCart}>
      <H16
        otherProps={{
          bg: '$red10',
          color: '$red',
          br: ms8,
          px: ms4,
          py: mvs4,
        }}
      >
        Remove all
      </H16>
    </View>
  );
}
