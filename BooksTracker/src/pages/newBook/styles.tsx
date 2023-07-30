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
    color: theme.colors.secondary,
  },
  galeryIcon: {
    alignItems: 'center',
    position: 'absolute',
    top: '80%',
    justifyContent: 'center',
    borderRadius: 6,
    left: '62%',
    backgroundColor: theme.colors.gray,
    width: '40%',
    height: '24%',
  },

  imageContent: {
    height: 150,
    width: '100%',
  },
  imageContainer: {
    width: '36%',
    marginTop: '8%',
    borderWidth: 8,
    borderColor: theme.colors.gray,
    alignItems: 'center',
  },
  inputsContainer: {
    marginTop: '10%',
  },
  radioContainer: {
    alignItems: 'center',
  },
  radioTitle: {
    fontSize: 17,
    fontWeight: '500',
  },
});
