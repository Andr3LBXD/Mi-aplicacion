import { View, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';
import CalculatorButton from '../components/CalculatorButton';
import CalculatorDisplay from '../components/CalculatorDisplay';
import { globalStyles } from '../theme/global-styles';
import { Colors } from '../theme/colors';

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Título de la App */}
      <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
        <CustomText variant="small" style={{ fontSize: 18, color: Colors.red, textAlign: 'center' }}>
          CALCULADORA ANDRE :)
        </CustomText>
      </View>

      {/* Pantalla / Display Modular */}
      <CalculatorDisplay value="20" prevValue="10" />

      {/* Filas de Botones */}
      <View style={styles.row}>
        <CalculatorButton label="C" color={Colors.darkGray} onPress={() => {}} />
        <CalculatorButton label="+/-" color={Colors.darkGray} onPress={() => {}} />
        <CalculatorButton label="del" color={Colors.darkGray} onPress={() => {}} />
        <CalculatorButton label="÷" color={Colors.red} onPress={() => {}} />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="7" onPress={() => {}} />
        <CalculatorButton label="8" onPress={() => {}} />
        <CalculatorButton label="9" onPress={() => {}} />
        <CalculatorButton label="X" color={Colors.red} onPress={() => {}} />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="4" onPress={() => {}} />
        <CalculatorButton label="5" onPress={() => {}} />
        <CalculatorButton label="6" onPress={() => {}} />
        <CalculatorButton label="-" color={Colors.red} onPress={() => {}} />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="1" onPress={() => {}} />
        <CalculatorButton label="2" onPress={() => {}} />
        <CalculatorButton label="3" onPress={() => {}} />
        <CalculatorButton label="+" color={Colors.red} onPress={() => {}} />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="0" doubleSize onPress={() => {}} />
        <CalculatorButton label="." onPress={() => {}} />
        <CalculatorButton label="=" color={Colors.red} onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
});