import ButtonFull from '@/components/common/Buttons/ButtonFull/ButtonFull';
import Column from '@/components/common/Column/Column';
import QuantityChangeHandlers from '@/components/common/QuantityChangeHandlersButtons/QuantityChangeHandlersButtons';
import Row from '@/components/common/Row/Row';
import { H24 } from '@/components/common/Typography/Headings';
import CartItemImage from '@/components/shoppingBag/CartItem/CartItemImage/CartItemImage';
import CartItemNameAndPrice from '@/components/shoppingBag/CartItemNameAndPrice/CartItemNameAndPrice';
import EmptyShoppingBag from '@/components/shoppingBag/EmptyShoppingBag/EmptyShoppingBag';
import ShoppingBagHeader from '@/components/shoppingBag/ShoppingBagHeader/ShoppingBagHeader';
import { ms24, ms8, mvs16, mvs24, mvs8 } from '@/constants/responsiveUnits';
import { useCart } from '@/context/cartContext';
import { FlashList } from '@shopify/flash-list';
import { View } from '@tamagui/core';
import { Stack, Tabs } from 'expo-router';

function ShoppingBag() {
  const { cart, getCartTotalPrice } = useCart();
  const totalPrice = getCartTotalPrice();

  return (
    <View
      bg="$white"
      f={1}
    >
      <Tabs.Screen
        options={{
          headerShown: true,
          header: () => <ShoppingBagHeader />,
        }}
      />
      {cart.length === 0 && <EmptyShoppingBag />}
      {cart.length !== 0 && (
        <View
          f={1}
          mt={mvs24}
        >
          <FlashList
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={CartItemSeparator}
            estimatedItemSize={92}
            data={cart}
            renderItem={({ item }) => (
              <Row
                px={ms24}
                gap={ms8}
              >
                <CartItemImage imageUrl={item.product_image} />
                <CartItemNameAndPrice
                  name={item.product_name}
                  price={item.product_price}
                />
                <Column
                  f={1}
                  jc="flex-end"
                >
                  <QuantityChangeHandlers
                    quantity={item.quantityInCart}
                    itemToBePurchased={item}
                  />
                </Column>
              </Row>
            )}
          />

          <Column
            gap={16}
            px={ms24}
            py={mvs16}
            btw={1}
            btc="$black10"
          >
            <Row jc="space-between">
              <H24>Total</H24>
              <H24>{totalPrice} Pkr</H24>
            </Row>
            <ButtonFull
              label="Choose delivery method"
              // onPress={navigateToCheckoutScreen}
            />
          </Column>
        </View>
      )}
    </View>
  );
}

function CartItemSeparator() {
  return <View my={mvs16} />;
}

export default ShoppingBag;
