import Column from '@/components/common/Column/Column';
import { H24 } from '@/components/common/Typography/Headings';
import { P16 } from '@/components/common/Typography/Paragraph';
import { ms16, mvs8 } from '@/constants/responsiveUnits';
// import { useNavigation } from '@react-navigation/native';
import { UserCircle2 } from '@tamagui/lucide-icons';
import { View } from '@tamagui/core';

function NoAccountFound() {
  //   const navigation = useNavigation();
  return (
    <Column
      ai="center"
      f={1}
      jc="center"
      px={ms16}
      gap={mvs8}
    >
      <UserCircle2
        size={100}
        color="$black70"
        strokeWidth={1.5}
      />
      <H24 mt={ms16}>You don’t have an account yet</H24>

      <P16 textAlign="center">
        Creating account will save you from filling the same details for orders again and again
      </P16>
      <View mt={ms16}>
        {/* <Button label="Create account" onPress={() => navigation.navigate(ScreenNames.welcome)} /> */}
      </View>
    </Column>
  );
}

export default NoAccountFound;
