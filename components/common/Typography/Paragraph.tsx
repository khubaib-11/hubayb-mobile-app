import { styled, Text, TextProps } from '@tamagui/core';

// Don't exports this Headings component. It is used inside of below component.
const Paragraph = styled(Text, {
  fontWeight: '$normal',
  fontFamily: '$body',
  color: '$black',
  letterSpacing: '$2',
});

// H16 -> fontsize : 16
export function P12({ children, otherProps }: { children: string; otherProps?: TextProps }) {
  return (
    <Paragraph
      // ! Don't change this order of props
      fontSize="$12"
      {...otherProps}
    >
      {children}
    </Paragraph>
  );
}

// H14 -> fontsize : 14
export function P14({ children, otherProps }: { children: string; otherProps?: TextProps }) {
  return (
    <Paragraph
      // ! Don't change this order of props
      fontSize="$14"
      {...otherProps}
    >
      {children}
    </Paragraph>
  );
}

// H22 -> fontsize : 22
export function P16({ children, otherProps }: { children: string; otherProps?: TextProps }) {
  return (
    <Paragraph
      // ! Don't change this order of props
      fontSize="$16"
      {...otherProps}
    >
      {children}
    </Paragraph>
  );
}

P12.defaultProps = {
  otherProps: undefined,
};
P14.defaultProps = {
  otherProps: undefined,
};
P16.defaultProps = {
  otherProps: undefined,
};
