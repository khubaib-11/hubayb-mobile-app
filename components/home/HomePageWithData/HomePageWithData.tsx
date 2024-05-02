import { useQuery } from '@tanstack/react-query';
import { View } from '@tamagui/core';
import { FlashList, MasonryFlashList } from '@shopify/flash-list';
import getProductsBySelectedCategory from '@/services/API/products/products';
import { mvs8 } from '@/constants/responsiveUnits';
import HomePageSkeleton from '../HomePageSkeleton/HomePageSkeleton';
import ProductCardWithData from '../ProductCard/ProductCardSkeleton/ProductCardWithData/ProductCardWithData';
import { L20 } from '@/components/common/Typography/Labels';

export default function HomePageWithData({ selectedCategory }: { selectedCategory: string }) {
  const {
    isLoading: isLoadingActiveCategoryProducts,
    data: activeCategoryProducts,
    error: activeCategoryProductsError,
  } = useQuery({
    queryKey: ['selectedCategory', selectedCategory],
    queryFn: () => getProductsBySelectedCategory(selectedCategory),
    enabled: Boolean(selectedCategory),
  });

  return (
    <View f={1}>
      {isLoadingActiveCategoryProducts && <HomePageSkeleton />}
      {activeCategoryProductsError && <L20>Error while loading categories</L20>}
      {!isLoadingActiveCategoryProducts && activeCategoryProducts?.length > 0 && (
        <FlashList
          numColumns={3}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={CardSeparator}
          estimatedItemSize={112}
          data={activeCategoryProducts}
          renderItem={({ item, index }) => (
            <View
              flexGrow={1}
              // mx={index % 1 === 0 ? 4 : 0}
              paddingLeft={index % 3 === 0 ? 8 : 0}
              paddingRight={index % 1 === 0 ? 8 : 0}
              paddingBottom={index % 1 === 0 ? 8 : 0}
              paddingTop={index < 3 ? 8 : 0}
            >
              <ProductCardWithData product={{ ...item }} />
            </View>
          )}
        />
      )}
    </View>
  );
}

function CardSeparator() {
  return <View py={mvs8} />;
}
