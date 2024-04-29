import { styled, Text, TextProps } from '@tamagui/core';

// Don't exports this Headings component. It is used inside of below component.
const Headings = styled(Text, {
  fontWeight: '$bold',
  fontFamily: '$body',
  color: '$black',
  fontSize: '$22',
});

// H16 -> fontsize : 16
export function H16({ children, otherProps }: { children: string; otherProps?: TextProps }) {
  return (
    <Headings
      // ! Don't change this order of props
      fontSize="$16"
      {...otherProps}
    >
      {children}
    </Headings>
  );
}

// H14 -> fontsize : 14
export function H14({ children, otherProps }: { children: string; otherProps?: TextProps }) {
  return (
    <Headings
      // ! Don't change this order of props
      fontSize="$14"
      {...otherProps}
    >
      {children}
    </Headings>
  );
}

H14.defaultProps = {
  otherProps: undefined,
};

// H22 -> fontsize : 22
export function H24({ children, otherProps }: { children: string; otherProps?: TextProps }) {
  return (
    <Headings
      // ! Don't change this order of props
      fontSize="$24"
      {...otherProps}
    >
      {children}
    </Headings>
  );
}

H14.defaultProps = {
  otherProps: undefined,
};
H16.defaultProps = {
  otherProps: undefined,
};
H24.defaultProps = {
  otherProps: undefined,
};
