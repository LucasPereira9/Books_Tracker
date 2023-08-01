import {StyleSheet} from 'react-native';
import theme from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary,
    height: '100%',
    width: '95%',
  },
  iconContainer: {
    minWidth: '4%',
    margin: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    height: '85%',
  },
  titleContent: {
    position: 'absolute',
    bottom: '89%',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
});
