import { ShoppingBag } from '@tamagui/lucide-icons';
import Column from '@/components/common/Column/Column';
import { L16 } from '@/components/common/Typography/Labels';
import { ms24, mvs8 } from '@/constants/responsiveUnits';

function EmptyShoppingBag() {
  return (
    <Column
      f={1}
      jc="center"
      ai="center"
      px={ms24}
      gap={mvs8}
      bg="$white"
    >
      <ShoppingBag
        size={100}
        color="$black80"
      />
      <L16>Your shopping bag is empty. Start adding products to see them here</L16>
    </Column>
  );
}

export default EmptyShoppingBag;
