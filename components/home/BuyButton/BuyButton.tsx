import { mvs } from 'react-native-size-matters';
import Row from '@/components/common/Row/Row';
import { L16 } from '@/components/common/Typography/Labels';
import { ms8 } from '@/constants/responsiveUnits';

function BuyButton({ onPress }: { onPress: () => void }) {
  return (
    <Row
      onPress={onPress}
      align-center
      justifyContent="center"
      bg="$black"
      py={mvs(10)}
      br={ms8}
    >
      <L16 otherProps={{ color: '$white' }}>Buy</L16>
    </Row>
  );
}

export default BuyButton;
