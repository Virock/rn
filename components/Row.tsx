import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface RowProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Row: React.FC<RowProps> = ({ children, style }) => (
  <View style={[styles.row, style]}>{children}</View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8, // Gutter spacing
  },
});

export default Row;
