import {StyleSheet} from 'react-native';
import theme from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  topContent: {
    marginTop: '10%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: theme.colors.primary,
  },
  imageContent: {
    height: 130,
    width: '100%',
  },
  imageContainer: {
    width: '28%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  inputsContainer: {
    marginTop: '10%',
  },
});
