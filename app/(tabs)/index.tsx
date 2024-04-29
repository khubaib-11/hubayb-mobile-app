import Screen from '@/components/common/Screen/Screen';
import { L12 } from '@/components/common/Typography/Labels';
import { View, styled } from '@tamagui/core';

export default function index() {
  return (
    <Screen>
      {/* <XStack> */}
      <L12>uyyqryqoryuc rcy cy cyuyruwyeryuqyryuwyeyqry</L12>
      <L12>uyyqryqoryuc rcy cy cyuyruwyeryuqyryuwyeyqry</L12>
      {/* </XStack> */}
    </Screen>
  );
}
const XStack = styled(View, {
  flexDirection: 'row',
});
