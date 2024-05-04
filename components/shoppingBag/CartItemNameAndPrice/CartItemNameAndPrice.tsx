import Column from '@/components/common/Column/Column';
import { L16 } from '@/components/common/Typography/Labels';
import { P16 } from '@/components/common/Typography/Paragraph';

function CartItemNameAndPrice({ name, price }: { name: string; price: number }) {
  return (
    <Column
      f={1}
      justifyContent="space-evenly"
    >
      <L16
        otherProps={{
          numberOfLines: 2,
          ellipsizeMode: 'tail',
        }}
      >
        {name}
      </L16>

      <P16>{price} Pkr</P16>
    </Column>
  );
}

export default CartItemNameAndPrice;
