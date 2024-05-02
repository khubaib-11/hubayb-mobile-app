import { View } from '@tamagui/core';
import { BellDot } from '@tamagui/lucide-icons';
import { useState } from 'react';

import Column from '@/components/common/Column/Column';
import Row from '@/components/common/Row/Row';
import { H24 } from '@/components/common/Typography/Headings';
import { mvs8 } from '@/constants/responsiveUnits';
import { StyleSheet, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ms, mvs } from 'react-native-size-matters';
import CategoriesSkeleton from '../Categories/CategoriesSkeleton/CategoriesSkeleton';
import CategoriesWithData from '../Categories/CategoriesWithData/CategoriesWithData';

type Categories = {
  category: string | null;
  id: string;
  categoriesError: Error | null;
};

function HomeHeader({
  isLoadingCategories,
  categories,
  selectedCategory,
  setSelectedCategory,
  categoriesError,
}: {
  isLoadingCategories: boolean;
  categories: Categories[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
  categoriesError: Error | null;
}) {
  const { top } = useSafeAreaInsets();
  const [isFocused, setFocused] = useState(false);

  return (
    <View
      mt={top}
      bg="$white"
      ov="hidden"
      pb={10}
    >
      <View
        elevationAndroid={6}
        bg="$white"
        py={mvs(8)}
      >
        <Column
          px={ms(24)}
          mb={8}
        >
          <Row
            space-between
            align-center
          >
            <H24>Hubayb</H24>
            <BellDot size={24} />
          </Row>
          <View
            mt={4}
            borderWidth={1.5}
            borderColor={isFocused ? '$black' : '$gray50'}
            borderRadius={16}
          >
            <TextInput
              placeholder="Search products ..."
              style={styles.searchBar}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </View>
        </Column>
        {/* show skeleton if loading is happening */}
        {isLoadingCategories && <CategoriesSkeleton />}
        {/* if loading stopped, and error occured, show error */}
        {!isLoadingCategories && categoriesError && null}
        {/* if loading stopped, and no error occured and data is prsent show data */}
        {!isLoadingCategories && !categoriesError && categories && (
          <CategoriesWithData
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    paddingLeft: 8,
    paddingVertical: mvs8,
  },
});

export default HomeHeader;
