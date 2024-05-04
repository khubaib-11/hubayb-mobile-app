import Row from '@/components/common/Row/Row';
import { L30 } from '@/components/common/Typography/Labels';
import { ms24 } from '@/constants/responsiveUnits';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ClearCart from '../ClearCart/ClearCart';
import { useCart } from '@/context/cartContext';

export default function ShoppingBagHeader() {
  const { cart } = useCart();
  const { top } = useSafeAreaInsets();
  return (
    <Row
      space-between
      ai="flex-end"
      pt={top + 16}
      pb={top + 16}
      bg="$white"
      px={ms24}
      borderBottomColor="$black10"
      borderBottomWidth={cart.length > 0 ? 1 : 0}
    >
      <L30>Shopping Bag</L30>
      {cart.length > 0 && <ClearCart />}
    </Row>
  );
}
