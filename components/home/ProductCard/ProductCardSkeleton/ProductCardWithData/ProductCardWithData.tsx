import Column from '@/components/common/Column/Column';
import Row from '@/components/common/Row/Row';
import { L16, L18, L20 } from '@/components/common/Typography/Labels';
import { P14, P16 } from '@/components/common/Typography/Paragraph';
import { ms100, ms4, ms8, mvs16, mvs4, mvs8 } from '@/constants/responsiveUnits';
import { View } from '@tamagui/core';
import { Ruler } from '@tamagui/lucide-icons';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
type ProductCardProps = {
  product: {
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
      <Row
        align-center
        justifyContent="center"
        mt={mvs(12)}
        bg="$black"
        py={mvs(10)}
        br={ms8}
      >
        <L16 otherProps={{ color: '$white' }}>Buy</L16>
      </Row>
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
