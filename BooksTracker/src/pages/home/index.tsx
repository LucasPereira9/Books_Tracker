import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from './styles';
import BooksList from '../../components/BooksList';
import BookInfo from '../../components/BookInfo';
import RecommendationList from '../../components/RecommendationList';

export default function Home() {
  const test = [
    {name: 'lucas', id: 1},
    {name: 'eee', id: 2},
    {name: 'lucwwas', id: 3},
  ];
  const test2 = [
    {image: require('../../assets/images/horrorBooks/carrie.jpg')},
    {image: require('../../assets/images/horrorBooks/carrie.jpg')},
    {image: require('../../assets/images/horrorBooks/carrie.jpg')},
    {image: require('../../assets/images/horrorBooks/carrie.jpg')},
  ];
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
      <View style={styles.readingBooks}>
        <BooksList
          title="Meus Livros"
          data={test}
          renderItem={({item, index: findex}) => {
            return (
              <View style={styles.listContent} key={findex}>
                <BookInfo key={item.id} date={item.name} />
              </View>
            );
          }}
        />
      </View>
      <ScrollView style={styles.scrollContent}>
        <Text style={styles.title}>Recomendações:</Text>

        <View style={styles.RecomendationContainer}>
          <BooksList
            title="Porque voce está lendo: It a coisa"
            data={test2}
            renderItem={({item, index: findex}) => {
              return (
                <View style={{height: 165, top: 2}}>
                  <RecommendationList key={item.id} image={item.image} />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
