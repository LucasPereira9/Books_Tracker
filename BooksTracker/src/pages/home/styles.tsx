import {StyleSheet} from 'react-native';
import theme from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: 150,
    width: '50%',
  },
  titleContent: {
    right: 32,
  },
  title: {
    fontSize: 26,
    color: theme.colors.black,
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: '300',
    fontSize: 16,
    color: theme.colors.black,
  },
  readingBooks: {
    zIndex: -1,
    alignItems: 'center',
    bottom: '5%',
    height: '32%',
  },
  listContent: {
    minWidth: 260,
    height: '100%',
    marginRight: 18,
  },
  recomendationTitle: {
    marginHorizontal: 15,
  },
  RecomendationContainer: {
    alignItems: 'center',
    marginVertical: 20,
    height: '62%',
  },
  recomendationContent: {
    height: '100%',
    top: 2,
  },
  splash: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
