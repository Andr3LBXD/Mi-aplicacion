import { Text, TextProps, StyleSheet } from 'react-native';
import { globalStyles } from '../theme/global-styles';

interface Props extends TextProps {
  variant?: 'big' | 'small';
}

export const CustomText = ({ children, variant = 'big', style, ...rest }: Props) => {
  return (
    <Text
      style={[
        variant === 'big' ? globalStyles.mainResult : globalStyles.subResult,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default CustomText;