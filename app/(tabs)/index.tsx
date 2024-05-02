import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import Column from '@/components/common/Column/Column';
import Screen from '@/components/common/Screen/Screen';
import { L20 } from '@/components/common/Typography/Labels';
import Header from '@/components/home/Header/HomeHeader';
import HomePageSkeleton from '@/components/home/HomePageSkeleton/HomePageSkeleton';
import HomePageWithData from '@/components/home/HomePageWithData/HomePageWithData';
import getAllCategories from '@/services/API/categories/categories';

export default function index() {
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);

  const {
    isLoading: isLoadingCategories,
    data: categories,
    error: categoriesError,
  } = useQuery({ queryKey: ['categories'], queryFn: getAllCategories });

  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0]?.id);
    }
  }, [categories]);

  const shouldRenderSkeleton = !selectedCategory && !categoriesError;
  const shouldRenderHomePageWithData =
    !isLoadingCategories && categories && selectedCategory && !categoriesError;

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerTitle: '122',
          header: () => (
            <Header
              isLoadingCategories={isLoadingCategories}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categoriesError={categoriesError}
            />
          ),
          headerShadowVisible: true,
        }}
      />
      {categoriesError && <ErrorMessage />}
      {shouldRenderSkeleton && <HomePageSkeleton />}
      {shouldRenderHomePageWithData && <HomePageWithData selectedCategory={selectedCategory} />}
    </Screen>
  );
}

function ErrorMessage() {
  return (
    <Column
      f={1}
      align-center
      justifyContent="center"
      px={24}
    >
      <L20>Something went wrong. Check your internet connection</L20>
    </Column>
  );
}
