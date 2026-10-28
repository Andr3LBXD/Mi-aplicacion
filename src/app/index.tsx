import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Text, TouchableOpacity, ScrollView } from 'react-native';
import CalculatorDisplay from '../components/CalculatorDisplay';
import Regilla from '../components/Regilla';

export default function Page() {
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

      {/* Llamamos al componente Regilla */}
      <Regilla 
        buildFormula={buildFormula}
        clean={clean}
        deleteLast={deleteLast}
        calculateResult={calculateResult}
      />
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
});