import { styled, Text, TextProps } from '@tamagui/core';
import { ReactNode } from 'react';

// Don't exports this Headings component. It is used inside of below component.
const Label = styled(Text, {
  fontWeight: '$medium',
  fontFamily: '$body',
  color: '$black',
});

// H14 -> fontsize : 14
export function L12({
  children,
  otherProps,
}: {
  children: string | ReactNode;
  otherProps?: TextProps;
}) {
  return (
    <Label
      // ! Don't change this order of props
      fontSize="$11"
      {...otherProps}
    >
      {children}
    </Label>
  );
}

// H22 -> fontsize : 22
export function L14({ children, otherProps }: { children: string; otherProps?: TextProps }) {
  return (
    <Label
      // ! Don't change this order of props
      fontSize="$11"
      {...otherProps}
    >
      {children}
    </Label>
  );
}

// H16 -> fontsize : 16
export function L16({ children, otherProps }: { children: string; otherProps?: TextProps }) {
  return (
    <Label
      // ! Don't change this order of props
      fontSize="$16"
      {...otherProps}
    >
      {children}
    </Label>
  );
}

L12.defaultProps = {
  otherProps: undefined,
};
L14.defaultProps = {
  otherProps: undefined,
};

L16.defaultProps = {
  otherProps: undefined,
};
