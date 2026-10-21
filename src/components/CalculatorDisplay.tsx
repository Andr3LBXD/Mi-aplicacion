import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';

interface Props {
  value: string;
  prevValue?: string;
}

export const CalculatorDisplay = ({ value, prevValue }: Props) => {
  return (
    <View style={styles.container}>
      {prevValue ? (
        <CustomText variant="small" style={styles.prevText}>
          {prevValue}
        </CustomText>
      ) : null}
      <CustomText variant="big" numberOfLines={1} adjustsFontSizeToFit style={styles.mainText}>
        {value}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    alignItems: 'flex-end',
  },
  prevText: {
    opacity: 0.6,
  },
  mainText: {
    fontSize: 60,
  },
});

export default CalculatorDisplay;