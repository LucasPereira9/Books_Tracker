import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import booksServices from '../../services/booksServices';

export default function Splash() {
  const navigation = useNavigation();

  const getReadingBooks = async () => {
    try {
      const result = await booksServices.FirebaseData({
        type: 'userBooks',
      });

      const arrayOfObjects = Object.values(result);
      setTimeout(() => {
        navigation.navigate('Home', {
          readingBooks: arrayOfObjects,
        });
      }, 1000);
    } catch (error) {
      console.log('readingBooksErr:', error);
      navigation.navigate('Home', {
        readingBooks: [],
      });
    }
  };

  React.useEffect(() => {
    getReadingBooks();
  }, []);
  return (
    <View>
      <Text>lallalal</Text>
    </View>
  );
}
