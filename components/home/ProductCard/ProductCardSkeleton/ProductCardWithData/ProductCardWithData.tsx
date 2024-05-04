import Column from '@/components/common/Column/Column';
import QuantityChangeHandlers from '@/components/common/QuantityChangeHandlersButtons/QuantityChangeHandlersButtons';
import Row from '@/components/common/Row/Row';
import { L16, L18, L20 } from '@/components/common/Typography/Labels';
import { P14, P16 } from '@/components/common/Typography/Paragraph';
import BuyButton from '@/components/home/BuyButton/BuyButton';
import { ms100, ms4, ms8, mvs16, mvs4, mvs8 } from '@/constants/responsiveUnits';
import { useCart } from '@/context/cartContext';
import { View } from '@tamagui/core';
import { Minus, Plus, Ruler } from '@tamagui/lucide-icons';
import { Image } from 'expo-image';
import { StyleSheet, Vibration } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
type ProductCardProps = {
  product: {
    id: number;
    product_name: string;
    product_image: string;
    product_price: number;
    product_description: string | null;
    is_available: boolean;
    available_filters: string[] | null;
    product_weight: string | null;
  };
};

function ProductCardWithData({ product }: ProductCardProps) {
  const { addItemToCart, getItemQuantityInCart } = useCart();
  // Finds the quantity of current item in cart
  const quantity = getItemQuantityInCart(product.id);

  const { id, product_name, product_image, product_price, product_weight } = product;
  const itemToBePurchased = {
    id,
    product_name,
    product_image,
    product_price,
    product_weight: product_weight || '',
    quantityInCart: quantity,
  };

  function onPressBuyButton() {
    Vibration.vibrate(80);
    addItemToCart(itemToBePurchased);
  }

  return (
    <Column
      px={4}
      py={4}
      borderWidth={ms(0.5)}
      borderRadius={ms8}
      boc="$black50"
      bg="$white"
      // width effects layout, be careful for changing
      w="100%"
    >
      {/* Image container  starts */}
      <View
        w="100%"
        h={ms100}
        br={ms8}
        ov="hidden"
      >
        <Image
          style={styles.image}
          source={product.product_image}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
      </View>
      {/* Image container ends */}
      {/* details container starts */}
      <Column
        mt={mvs8}
        gap={mvs4}
      >
        <Row gap={ms4}>
          <Ruler
            size={20}
            color="$black"
            rotate="135deg"
          />
          <P16
            otherProps={{
              numberOfLines: 1,
              ellipsizeMode: 'tail',
            }}
          >
            500 ml
          </P16>
        </Row>
        <L20
          otherProps={{
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          }}
        >
          {product.product_name}
        </L20>
        <Row ai="baseline">
          <L18>{product.product_price}</L18>
          <P14>pkr</P14>
        </Row>
      </Column>
      {/* details container ends */}
      {/* Buy button starts */}
      <View mt={mvs(12)}>
        {quantity !== 0 ? (
          <QuantityChangeHandlers
            quantity={quantity}
            itemToBePurchased={itemToBePurchased}
          />
        ) : (
          <BuyButton onPress={onPressBuyButton} />
        )}
      </View>
      {/* Buy button ends */}
    </Column>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#00555513',
    // backgroundColor: '#61820018',
  },
});

export default ProductCardWithData;
