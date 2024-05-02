import { ms24 } from '@/constants/responsiveUnits';
import Row from '@/components/common/Row/Row';
import ButtonChipSkeleton from '../../ButtonChip/ButtonChipSkeleton/ButtonChipSkeleton';

export default function CategoriesSkeleton() {
  return (
    <Row
      space-between
      px={ms24}
    >
      <ButtonChipSkeleton />
      <ButtonChipSkeleton />
      <ButtonChipSkeleton />
      <ButtonChipSkeleton />
    </Row>
  );
}
