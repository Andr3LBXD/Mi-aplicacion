import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics'; // <--- 1. Importamos las vibraciones hápticas

interface CalculatorButtonProps {
  label: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
  flex?: number;
}

export default function CalculatorButton({
  label,
  onPress,
  color = '#26352d',
  textColor = '#d0d6c5',
  flex = 1,
}: CalculatorButtonProps) {
  
  // Función que combina la acción del botón con la vibración
  const handlePress = () => {
    Haptics.selectionAsync(); // <--- 2. Dispara una vibración corta y táctil tipo "clic"
    onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color, flex }]}
      onPress={handlePress} // <--- 3. Usamos esta nueva función aquí
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 2,
    borderWidth: 1,
    borderColor: '#3f5647',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});