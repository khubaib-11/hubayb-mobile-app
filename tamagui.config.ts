import { createFont, createTamagui, createTokens } from '@tamagui/core';
import { shorthands } from '@tamagui/shorthands';
import { s, vs } from 'react-native-size-matters';

const outFitFont = createFont({
  // family: '/assets/fonts/Outfit-Regular.ttf',
  family: 'Outfit-Regular',

  size: {
    11: 11,
    12: 12,
    13: 13,
    14: 14,
    15: 15,
    16: 16,
    18: 18,
    20: 20,
    22: 22,
    24: 24,
    32: 32,
    40: 40,
  },

  lineHeight: {
    12: vs(12),
    14: vs(14),
    16: vs(16),
    true: 16,
    18: vs(18),
    20: vs(20),
    22: vs(22),
    24: vs(24),
  },

  weight: {
    normal: 400,
    true: 400,
    medium: 500,
    bold: 600,
  },

  letterSpacing: {
    1: s(0.1),
    2: s(0.5),
    3: s(1),
    true: 1,
    4: s(1.5),
    5: s(2),
    6: s(3),
  },
  // (native only) swaps out fonts by face/style

  face: {
    400: { normal: 'Outfit-Regular' },
    true: { normal: 'Outfit-Regular' },
    500: { normal: 'Outfit-Medium' },
    600: { normal: 'Outfit-Bold' },
  },
});

const size = {
  1: s(1),
  2: s(2),
  4: s(4),
  6: s(6),
  8: s(8),
  10: s(10),
  12: s(12),
  14: s(14),
  16: s(16),
  true: 16,
  18: s(18),
  20: s(20),
  22: s(22),
};

export const tokens = createTokens({
  size,
  space: { ...size },
  // radius: { ...size },
  radius: { 1: 1, 2: 2, 4: 4, 6: 6, 8: 8, 10: 10, 12: 12, 14: 14, 16: 16 },
  zIndex: { 1: 10, 2: 20, 3: 30, 4: 40, 5: 50 },
  color: {
    black: '#1D1E22',
    black90: 'rgba(28, 30, 34, 0.9)',
    black80: 'rgba(28, 30, 34, 0.8)',
    black70: 'rgba(28, 30, 34, 0.7)',
    black60: 'rgba(28, 30, 34, 0.6)',
    black50: 'rgba(28, 30, 34, 0.5)',
    black40: 'rgba(28, 30, 34, 0.4)',
    black30: 'rgba(28, 30, 34, 0.3)',
    black20: 'rgba(29, 30, 34, 0.2)',
    black10: 'rgba(28, 30, 34, 0.1)',

    //   WHITE
    white: '#fff',

    //   GREEN
    green: '#95B730',
    green90: 'rgba(149, 183, 48, 0.9)',
    green80: 'rgba(149, 183, 48, 0.8)',
    green70: 'rgba(149, 183, 48, 0.7)',
    green60: 'rgba(149, 183, 48, 0.6)',
    green50: 'rgba(149, 183, 48, 0.5)',
    green40: 'rgba(149, 183, 48, 0.4)',
    green30: 'rgba(149, 183, 48, 0.3)',
    green20: 'rgba(149, 183, 48, 0.2)',
    green10: 'rgba(149, 183, 48, 0.1)',

    // Red
    red: '#C92525',
    red90: 'rgba(201, 37, 37, 0.9)',
    red80: 'rgba(201, 37, 37, 0.8)',
    red70: 'rgba(201, 37, 37, 0.7)',
    red60: 'rgba(201, 37, 37, 0.6)',
    red50: 'rgba(201, 37, 37, 0.5)',
    red40: 'rgba(201, 37, 37, 0.4)',
    red30: 'rgba(201, 37, 37, 0.3)',
    red20: 'rgba(201, 37, 37, 0.2)',
    red10: 'rgba(201, 37, 37, 0.1)',

    // Gray
    gray: '#87888C',
    gray90: 'rgba(135, 136, 140, 0.9)',
    gray80: 'rgba(135, 136, 140, 0.8)',
    gray70: 'rgba(135, 136, 140, 0.7)',
    gray60: 'rgba(135, 136, 140, 0.6)',
    gray50: 'rgba(135, 136, 140, 0.5)',
    gray40: 'rgba(135, 136, 140, 0.4)',
    gray30: 'rgba(135, 136, 140, 0.3)',
    gray20: 'rgba(135, 136, 140, 0.2)',
    gray10: 'rgba(135, 136, 140, 0.1)',

    // Skeleton
    skeleton: '#EDEEF2',
    skeleton90: 'rgba(237, 238, 242, 0.9)',
    skeleton80: 'rgba(237, 238, 242, 0.8)',
    skeleton70: 'rgba(237, 238, 242, 0.7)',
    skeleton60: 'rgba(237, 238, 242, 0.6)',
    skeleton50: 'rgba(237, 238, 242, 0.5)',
    skeleton40: 'rgba(237, 238, 242, 0.4)',
    skeleton30: 'rgba(237, 238, 242, 0.3)',
    skeleton20: 'rgba(237, 238, 242, 0.2)',
    skeleton10: 'rgba(237, 238, 242, 0.1)',

    // INACTIVE
    inactive: '#49454F',
    inactive90: 'rgba(73, 69, 79, 0.9)',
    inactive80: 'rgba(73, 69, 79, 0.8)',
    inactive70: 'rgba(73, 69, 79, 0.7)',
    inactive60: 'rgba(73, 69, 79, 0.6)',
    inactive50: 'rgba(73, 69, 79, 0.5)',
    inactive40: 'rgba(73, 69, 79, 0.4)',
    inactive30: 'rgba(73, 69, 79, 0.3)',
    inactive20: 'rgba(73, 69, 79, 0.2)',
    inactive10: 'rgba(73, 69, 79, 0.1)',
  },
});
const config = createTamagui({
  fonts: {
    // for tamagui, heading and body are assumed
    heading: outFitFont,
    body: outFitFont,
  },
  tokens,
  themes: {
    light: {
      text: tokens.color.black,
      background: tokens.color.white,
      tint: tokens.color.green,
      tabIconDefault: tokens.color.black50,
      tabIconSelected: tokens.color.green,
    },
    dark: {},
  },

  // optional:
  // add custom shorthand props

  // note: as const is important, without it you may see breaking types

  shorthands,
});
type AppConfig = typeof config;
// this will give you types for your components

// note - if using your own design system, put the package name here instead of tamagui

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
  // if you want types for group styling props, define them like so:

  interface TypeOverride {
    groupNames(): 'a' | 'b' | 'c';
  }
}
export default config;
