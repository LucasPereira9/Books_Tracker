import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import LottieView from 'lottie-react-native';
import booksServices from '../../services/booksServices';
import {styles} from './styles';

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
      }, 3000);
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
    <View style={styles.splash}>
      <LottieView
        source={require('../../assets/fredericoSplash.json')}
        autoPlay
        loop
        style={styles.splash}
      />
    </View>
  );
}
