import {StyleSheet} from 'react-native';
import theme from '../../../global/theme';

export const styles = StyleSheet.create({
  listContent: {
    minWidth: 260,
    height: 200,
    marginRight: 18,
  },
  dashedButton: {
    flex: 1,
    width: 150,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 4,
    borderColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  progressBar: {
    marginTop: '25%',
  },

  ReadingBooksContent: {
    minWidth: 260,
    height: '100%',
    marginRight: 18,
  },

  recomendationContent: {
    height: '100%',
    top: 2,
  },
});
