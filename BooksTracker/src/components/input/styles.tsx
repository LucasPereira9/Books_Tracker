import {StyleSheet} from 'react-native';
import theme from '../../../global/theme';

export const styles = StyleSheet.create({
  Container: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.gray,
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 12,
    height: 39,
    width: '90%',
  },
  inputContainer: {
    color: theme.colors.black,
    paddingLeft: 10,
    flex: 1,
  },
  titleContainer: {
    marginLeft: '6%',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});
