import {StyleSheet} from 'react-native';
import theme from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: 150,
    width: '50%',
  },
  titleContent: {
    right: 32,
  },
  title: {
    fontSize: 26,
    color: theme.colors.black,
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: '300',
    fontSize: 16,
    color: theme.colors.black,
  },
});
