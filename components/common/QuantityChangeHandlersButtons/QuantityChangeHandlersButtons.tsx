import { Vibration } from 'react-native';
import { View } from '@tamagui/core';
import { Minus, Plus } from '@tamagui/lucide-icons';
import { mvs } from 'react-native-size-matters';
import Row from '../Row/Row';
import { ms8 } from '@/constants/responsiveUnits';
import { P16 } from '../Typography/Paragraph';
import { useCart } from '@/context/cartContext';
import { L16, L18 } from '../Typography/Labels';

type Props = {
  quantity: number;
  itemToBePurchased: {
    id: number;
    product_name: string;
    product_price: number;
    product_image: string;
    product_weight: string;
    quantityInCart: number;
  };
};

const HIT_SLOPE = { bottom: 10, left: 10, right: 10, top: 10 };

function QuantityChangeHandlers({ quantity, itemToBePurchased }: Props) {
  console.log(quantity);
  const { addItemToCart, removeItemFromCart } = useCart();
  return (
    <Row
      bg="$green"
      py={mvs(9.5)}
      px={ms8}
      br={ms8}
      jc="space-between"
      ai="center"
    >
      <View
        br={4}
        hitSlop={HIT_SLOPE}
        onPress={() => {
          Vibration.vibrate(70);
          // if quantity is less than 1, then on pressing minus delete item from cart
          removeItemFromCart(itemToBePurchased);
        }}
      >
        <Minus
          size={24}
          color="$white"
        />
      </View>
      {/*  */}

      <L18 otherProps={{ color: '$white' }}>{quantity}</L18>
      <View
        br={12}
        hitSlop={HIT_SLOPE}
        onPress={() => {
          Vibration.vibrate(70);
          addItemToCart(itemToBePurchased);
        }}
      >
        <Plus
          size={24}
          color="$white"
        />
      </View>
    </Row>
  );
}

export default QuantityChangeHandlers;
