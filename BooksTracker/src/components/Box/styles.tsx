import {StyleSheet} from 'react-native';
import theme from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary,
    height: '68%',
    width: '95%',
  },
  iconContainer: {
    minWidth: '4%',
    margin: 10,
  },
  content: {
    flex: 1,
    height: '85%',
  },
});
