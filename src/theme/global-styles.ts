import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 55,
    textAlign: 'right',
    fontFamily: 'Heavitas',
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 30,
    textAlign: 'right',
    fontFamily: 'Heavitas',
  },
});