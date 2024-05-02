import { View } from '@tamagui/core';
import { FlashList } from '@shopify/flash-list';
import { ms24, ms8 } from '@/constants/responsiveUnits';
import ButtonChip from '../../ButtonChip/ButtonChip/ButtonChip';

type Categories = {
  category: string | null;
  id: string;
};

function SeparatorComponent() {
  return <View px={ms8} />;
}

export default function CategoriesWithData({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: Categories[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
}) {
  return (
    <FlashList
      contentContainerStyle={{ paddingHorizontal: ms24 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      estimatedItemSize={46}
      extraData={selectedCategory}
      data={categories}
      renderItem={({ item }) => (
        <ButtonChip
          active={item.id === selectedCategory}
          chipLabel={item.category}
          onPress={() => setSelectedCategory(item.id)}
        />
      )}
      ItemSeparatorComponent={SeparatorComponent}
    />
  );
}
