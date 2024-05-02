import { ScrollView } from 'react-native';
import Row from '@/components/common/Row/Row';
import CategoriesSkeleton from '../Categories/CategoriesSkeleton/CategoriesSkeleton';
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton/ProductCardSkeleton';

function HomePageSkeleton() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Row
        space-between
        mt={8}
      >
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </Row>
      <Row
        space-between
        mt={8}
      >
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </Row>
      <Row
        space-between
        mt={8}
      >
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </Row>
    </ScrollView>
  );
}

export default HomePageSkeleton;
