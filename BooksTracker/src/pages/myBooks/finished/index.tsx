import React from 'react';
import {FlatList, Image, View} from 'react-native';
import BookInfo from '../../../components/BookInfo';
import theme from '../../../../global/theme';
import booksServices from '../../../services/booksServices';
import {IBookProps} from '../book.structure';
import {styles} from './styles';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {useNavigation} from '@react-navigation/native';

export default function FinishedBooks() {
  const [test, setTest] = React.useState();
  const navigation = useNavigation();
  const [empty, setEmpty] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const getReadingBooks = async () => {
    setLoading(true);
    try {
      const result = await booksServices.filterData('finalizado');
      setTest(result);
      setLoading(false);
      if (result.length < 1) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    } catch (error) {
      setLoading(false);
      setEmpty(true);
      console.log('ERRORrec', error);
    }
  };
  React.useEffect(() => {
    getReadingBooks();
  }, []);
  const renderItem = ({item}: {item: IBookProps}) => {
    return (
      <View style={styles.renderItems}>
        <BookInfo
          function={() => navigation.navigate('EditBook', {item})}
          icon={
            item.status === 'finalizado'
              ? 'check-square'
              : item.status === 'lendo'
              ? 'play-circle'
              : 'book'
          }
          iconColor={
            item.status === 'finalizado'
              ? theme.colors.success
              : item.status === 'lendo'
              ? theme.colors.secondary
              : theme.colors.black
          }
          status={item.status}
          progress={booksServices.HandleProgress(item.percentage)}
          percentage={item.percentage}
          pagesRead={item.pagesRead}
          totalPages={item.totalPages}
          pagesProgress={item.isPagesProgressEnabled}
          image={item.image}
          key={item.key}
          title={item.title}
        />
      </View>
    );
  };
  return (
    <View>
      <View style={styles.container}>
        {loading ? (
          <View style={styles.progressBar}>
            <ProgressBar
              color={theme.colors.black}
              styleAttr="Normal"
              indeterminate={false}
            />
          </View>
        ) : empty ? (
          <View>
            <Image
              style={styles.emptyImage}
              source={require('../../../assets/images/empty.jpg')}
            />
          </View>
        ) : (
          <FlatList data={test} renderItem={renderItem} />
        )}
      </View>
    </View>
  );
}
