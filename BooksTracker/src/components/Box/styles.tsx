import {StyleSheet} from 'react-native';
import theme from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
    opacity: 0.75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary,
    minHeight: '48%',
    width: '90%',
  },
  iconContainer: {
    minWidth: '10%',
    margin: 10,
  },
  content: {
    flex: 1,
    height: '85%',
  },
});
