import {StyleSheet} from 'react-native';
import theme from './theme';

export const defaultStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  gradient: {
    position: 'absolute',
    bottom: '0%',
    width: '100%',
    height: '16%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
