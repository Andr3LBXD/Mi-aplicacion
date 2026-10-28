import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DisplayProps {
  formula: string;
  result: string;
}

export default function CalculatorDisplay({ formula, result }: DisplayProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.formulaText} numberOfLines={2} adjustsFontSizeToFit>
        {formula || '0'}
      </Text>
      <Text style={styles.resultText} numberOfLines={1} adjustsFontSizeToFit>
        {result ? `= ${result}` : ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#2b3b32',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#3f5647',
  },
  formulaText: {
    color: '#93a38d',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'right',
  },
  resultText: {
    color: '#d0d6c5',
    fontSize: 38,
    fontWeight: '900',
    textAlign: 'right',
    marginTop: 4,
  },
});