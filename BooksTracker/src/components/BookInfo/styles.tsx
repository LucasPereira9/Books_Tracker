import {StyleSheet} from 'react-native';
import theme from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    top: 12,
    height: '95%',
    width: '100%',
    backgroundColor: theme.colors.white,
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContent: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    margin: 10,
    width: 100,
    height: '86%',
    right: 20,
  },
  bookContent: {
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '900',
  },
  statusContainer: {
    height: '60%',
    justifyContent: 'space-between',
  },
});
