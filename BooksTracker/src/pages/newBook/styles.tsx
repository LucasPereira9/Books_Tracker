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
  dropdown: {
    backgroundColor: theme.colors.gray,
    borderRadius: 10,
    margin: 16,
    height: 43,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  genderTitle: {
    left: '6%',
    fontSize: 16,
    fontWeight: '600',
  },
  iconStyle: {
    marginRight: '6%',
    width: '6%',
    height: '90%',
  },
  buttonContainer: {
    margin: 18,
    bottom: 5,
  },
});
