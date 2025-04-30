import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface ContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: '100%',
    maxWidth: 1140,
    alignSelf: 'center',
  },
});

export default Container;
