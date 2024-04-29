import { styled, View } from '@tamagui/core';

const Column = styled(View, {
  flexDirection: 'column',

  variants: {
    stretch: {
      true: {
        jc: 'unset',
      },
    },
    'space-between': {
      true: {
        jc: 'space-between',
      },
    },
    'align-center': {
      true: {
        ai: 'center',
      },
    },
  } as const,

  defaultVariants: {
    stretch: true,
  },
});

export default Column;
