import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import ReadingBooks from '../../components/ReadingBooks';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.imageContainer}
          source={require('../../assets/images/frederico.png')}
        />
        <View style={styles.titleContent}>
          <Text style={styles.title}>Bem vindo!</Text>
          <Text style={styles.subtitle}>Que livro você leu hoje?</Text>
        </View>
      </View>
      <View>
        <ReadingBooks />
      </View>
    </View>
  );
}
