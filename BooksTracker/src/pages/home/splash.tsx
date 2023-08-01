import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import LottieView from 'lottie-react-native';
import booksServices from '../../services/booksServices';

export default function Splash() {
  const navigation = useNavigation();

  const getReadingBooks = async () => {
    try {
      const result = await booksServices.FirebaseData({
        type: 'userBooks',
      });

      const arrayOfObjects = Object.values(result);
      const newArray = arrayOfObjects.reverse();

      setTimeout(() => {
        navigation.navigate('Home', {
          readingBooks: newArray,
        });
      }, 5000);
    } catch (error) {
      console.log('readingBooksErr:', error);
      navigation.navigate('Home', {
        readingBooks: [],
      });
    }
  };

  useFocusEffect(() => {
    getReadingBooks();
  });
  return (
    <View style={{flex: 1}}>
      <LottieView
        source={require('../../assets/fredericoSplash.json')}
        autoPlay
        loop
        style={{flex: 1}}
      />
    </View>
  );
}
