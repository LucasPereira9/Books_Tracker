import React from 'react';
import {FlatList, View} from 'react-native';
import BookInfo from '../../../components/BookInfo';
import theme from '../../../../global/theme';
import booksServices from '../../../services/booksServices';
import {IBookProps} from '../book.structure';
import {styles} from './styles';
import {ProgressBar} from '@react-native-community/progress-bar-android';

export default function BookCase() {
  const [test, setTest] = React.useState();
  const [loading, setLoading] = React.useState<boolean>(false);
  const getReadingBooks = async () => {
    setLoading(true);
    try {
      const result = await booksServices.filterData('na estante');
      setTest(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
        ) : (
          <FlatList data={test} renderItem={renderItem} />
        )}
      </View>
    </View>
  );
}
