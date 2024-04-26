import Screen from '@/components/common/Screen/Screen';
import { H14 } from '@/components/common/Typography/Headings';
import { L16 } from '@/components/common/Typography/Labels';
import { P14, P16 } from '@/components/common/Typography/Paragraph';

export default function index() {
  return (
    <Screen>
      <H14>Home is good</H14>
      <H14>Home is good</H14>
      <P14>I am body</P14>
      <P16>I am body</P16>
      <L16>I am label</L16>
    </Screen>
  );
}
