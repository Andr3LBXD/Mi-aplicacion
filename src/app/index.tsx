import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Text, TouchableOpacity, ScrollView } from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import CalculatorDisplay from '../components/CalculatorDisplay';

export default function Index() {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState('');
  const [isDegree, setIsDegree] = useState(true);
  const [history, setHistory] = useState<string[]>([]);

  const buildFormula = (value: string) => {
    setFormula((prev) => prev + value);
  };

  const clean = () => {
    setFormula('');
    setResult('');
  };

  const deleteLast = () => {
    setFormula((prev) => prev.slice(0, -1));
  };

  const factorialize = (num: number): number => {
    if (num < 0) return NaN;
    if (num === 0 || num === 1) return 1;
    let acumulado = 1;
    for (let i = 2; i <= num; i++) acumulado *= i;
    return acumulado;
  };

  const calculateResult = () => {
    try {
      let expression = formula;

      if (expression.includes('!')) {
        const parts = expression.split('!');
        const num = parseFloat(parts[0]);
        const factRes = factorialize(num);
        setResult(String(factRes));
        setHistory(prev => [formula + ' = ' + factRes, ...prev.slice(0, 4)]);
        return;
      }

      let processedExpression = expression
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/√\(/g, 'Math.sqrt(')
        .replace(/sin\(/g, isDegree ? 'Math.sin((Math.PI/180)*' : 'Math.sin(')
        .replace(/cos\(/g, isDegree ? 'Math.cos((Math.PI/180)*' : 'Math.cos(')
        .replace(/tan\(/g, isDegree ? 'Math.tan((Math.PI/180)*' : 'Math.tan(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/\^/g, '**');

      const evalResult = eval(processedExpression);
      const finalRes = String(Number(evalResult.toFixed(6)));
      setResult(finalRes);
      
      setHistory(prev => [formula + ' = ' + finalRes, ...prev.slice(0, 4)]);
    } catch (e) {
      setResult('Error');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#223028" />
      
      {/* Cabecera Táctica Avanzada con Modo DEG/RAD */}
      <View style={styles.header}>
        <Text style={styles.brandText}>TACTICAL <Text style={styles.brandSub}>ELITE-V3</Text></Text>
        <TouchableOpacity 
          style={styles.modeToggle} 
          onPress={() => setIsDegree(!isDegree)}
        >
          <Text style={styles.modeText}>{isDegree ? 'MODE: DEG' : 'MODE: RAD'}</Text>
        </TouchableOpacity>
      </View>

      {/* Pantalla de Resultados y Mini Historial */}
      <CalculatorDisplay formula={formula} result={result} />

      {/* Panel de Historial Reciente */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.historyContainer}>
        {history.map((item, index) => (
          <Text key={index} style={styles.historyText}>[{item}] </Text>
        ))}
      </ScrollView>

      {/* Teclado Científico */}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b2620',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 6,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    paddingHorizontal: 4,
  },
  brandText: {
    color: '#8fa394',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
  },
  brandSub: {
    color: '#d0d6c5',
  },
  modeToggle: {
    backgroundColor: '#26352d',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#3f5647',
  },
  modeText: {
    color: '#d0d6c5',
    fontSize: 10,
    fontWeight: 'bold',
  },
  historyContainer: {
    maxHeight: 24,
    marginBottom: 4,
  },
  historyText: {
    color: '#6e8576',
    fontSize: 11,
    fontStyle: 'italic',
    marginRight: 10,
  },
  keypad: {
    gap: 6,
  },
  row: {
    flexDirection: 'row',
    gap: 6,
  },
});