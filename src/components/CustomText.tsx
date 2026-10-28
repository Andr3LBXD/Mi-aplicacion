import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  variant?: 'normal' | 'title' | 'display';
}

export default function CustomText({ children, variant = 'normal', style, ...props }: CustomTextProps) {
  return (
    <Text 
      style={[
        variant === 'title' && styles.title,
        variant === 'display' && styles.display,
        variant === 'normal' && styles.normal,
        style
      ]} 
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  normal: { color: '#ffffff', fontSize: 20, fontWeight: '600' },
  title: { color: '#38bdf8', fontSize: 22, fontWeight: 'bold' },
  display: { color: '#f3f4f6', fontSize: 38, fontWeight: 'bold' },
});