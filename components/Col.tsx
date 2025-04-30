import React, { ReactNode } from 'react';
import { View, useWindowDimensions, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface ColProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const Col: React.FC<ColProps> = ({ children, sm, md, lg, xl, style }) => {
  const { width } = useWindowDimensions();

  const getSpan = (): number => {
    if (width >= breakpoints.xl && xl) return xl;
    if (width >= breakpoints.lg && lg) return lg;
    if (width >= breakpoints.md && md) return md;
    if (width >= breakpoints.sm && sm) return sm;
    return 12;
  };

  const span = getSpan();
  const colWidth = `${(span / 12) * 100}%`;

  return (
    <View style={[{ width: colWidth, paddingHorizontal: 8 }, style]}>
      {children}
    </View>
  );
};

export default Col;
