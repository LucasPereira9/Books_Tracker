import {StyleSheet} from 'react-native';
import theme from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '86%',
    borderRadius: 10,
    height: '22%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: theme.colors.gray,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '400',
  },
});
