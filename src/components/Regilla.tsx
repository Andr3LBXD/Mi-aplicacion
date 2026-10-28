import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalculatorButton from './CalculatorButton';

interface RegillaProps {
  buildFormula: (val: string) => void;
  clean: () => void;
  deleteLast: () => void;
  calculateResult: () => void;
}

export default function Regilla({ buildFormula, clean, deleteLast, calculateResult }: RegillaProps) {
  return (
    <View style={styles.keypad}>
      {/* Fila 1: Científicas avanzadas */}
      <View style={styles.row}>
        <CalculatorButton label="sin" onPress={() => buildFormula('sin(')} color="#26352d" textColor="#93a38d" />
        <CalculatorButton label="cos" onPress={() => buildFormula('cos(')} color="#26352d" textColor="#93a38d" />
        <CalculatorButton label="tan" onPress={() => buildFormula('tan(')} color="#26352d" textColor="#93a38d" />
        <CalculatorButton label="log" onPress={() => buildFormula('log(')} color="#26352d" textColor="#93a38d" />
      </View>

      {/* Fila 2: Constantes y Exponentes únicos */}
      <View style={styles.row}>
        <CalculatorButton label="π" onPress={() => buildFormula('π')} color="#314439" textColor="#d0d6c5" />
        <CalculatorButton label="e" onPress={() => buildFormula('e')} color="#314439" textColor="#d0d6c5" />
        <CalculatorButton label="n!" onPress={() => buildFormula('!')} color="#314439" textColor="#d0d6c5" />
        <CalculatorButton label="√" onPress={() => buildFormula('√(')} color="#314439" textColor="#d0d6c5" />
      </View>

      {/* Fila 3: Potencia y Paréntesis */}
      <View style={styles.row}>
        <CalculatorButton label="^" onPress={() => buildFormula('^')} color="#314439" textColor="#d0d6c5" />
        <CalculatorButton label="(" onPress={() => buildFormula('(')} color="#314439" textColor="#d0d6c5" />
        <CalculatorButton label=")" onPress={() => buildFormula(')')} color="#314439" textColor="#d0d6c5" />
        <CalculatorButton label="C" onPress={clean} color="#4a3535" textColor="#e0a9a9" />
      </View>

      {/* Fila 4: Numérica 7-9 y Div */}
      <View style={styles.row}>
        <CalculatorButton label="7" onPress={() => buildFormula('7')} color="#d0d6c5" textColor="#223028" />
        <CalculatorButton label="8" onPress={() => buildFormula('8')} color="#d0d6c5" textColor="#223028" />
        <CalculatorButton label="9" onPress={() => buildFormula('9')} color="#d0d6c5" textColor="#223028" />
        <CalculatorButton label="÷" onPress={() => buildFormula('÷')} color="#26352d" textColor="#93a38d" />
      </View>

      {/* Fila 5: Numérica 4-6 y Mult */}
      <View style={styles.row}>
        <CalculatorButton label="4" onPress={() => buildFormula('4')} color="#d0d6c5" textColor="#223028" />
        <CalculatorButton label="5" onPress={() => buildFormula('5')} color="#d0d6c5" textColor="#223028" />
        <CalculatorButton label="6" onPress={() => buildFormula('6')} color="#d0d6c5" textColor="#223028" />
        <CalculatorButton label="×" onPress={() => buildFormula('×')} color="#26352d" textColor="#93a38d" />
      </View>

      {/* Fila 6: Numérica 1-3 y Resta */}
      <View style={styles.row}>
        <CalculatorButton label="1" onPress={() => buildFormula('1')} color="#d0d6c5" textColor="#223028" />
        <CalculatorButton label="2" onPress={() => buildFormula('2')} color="#d0d6c5" textColor="#223028" />
        <CalculatorButton label="3" onPress={() => buildFormula('3')} color="#d0d6c5" textColor="#223028" />
        <CalculatorButton label="-" onPress={() => buildFormula('-')} color="#26352d" textColor="#93a38d" />
      </View>

      {/* Fila 7: Ceros, Punto y Suma */}
      <View style={styles.row}>
        <CalculatorButton label="0" onPress={() => buildFormula('0')} color="#d0d6c5" textColor="#223028" flex={2} />
        <CalculatorButton label="." onPress={() => buildFormula('.')} color="#d0d6c5" textColor="#223028" />
        <CalculatorButton label="+" onPress={() => buildFormula('+')} color="#26352d" textColor="#93a38d" />
      </View>

      {/* Fila 8: Borrar y Calcular */}
      <View style={styles.row}>
        <CalculatorButton label="⌫" onPress={deleteLast} color="#4a3535" textColor="#e0a9a9" flex={1} />
        <CalculatorButton label="=" onPress={calculateResult} color="#26352d" textColor="#d0d6c5" flex={3} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keypad: {
    gap: 6,
  },
  row: {
    flexDirection: 'row',
    gap: 6,
  },
});