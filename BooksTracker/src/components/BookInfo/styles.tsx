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
    borderRadius: 6,
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
    maxWidth: '40%',
    height: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progress: {
    alignSelf: 'center',
  },
  statusContent: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    right: 3,
  },
  status: {
    alignItems: 'center',
  },
});
