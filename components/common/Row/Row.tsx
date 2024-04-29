import React from 'react';
import { styled, View } from '@tamagui/core';

const Row = styled(View, {
  flexDirection: 'row',

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

export default Row;
