import { Pressable, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color },
        doubleSize && styles.doubleButton,
        { opacity: pressed ? 0.8 : 1 },
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  doubleButton: {
    width: 156,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: Colors.textPrimary,
    fontFamily: 'Heavitas',
  },
});

export default CalculatorButton;