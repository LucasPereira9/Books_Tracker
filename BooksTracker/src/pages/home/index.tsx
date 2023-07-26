import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import BooksList from '../../components/BooksList';
import BookInfo from '../../components/BookInfo';
import RecommendationList from '../../components/RecommendationList';
import database from '@react-native-firebase/database';
import booksServices from '../../services/booksServices';
import uuid from 'react-native-uuid';

export default function Home() {
  const [readingBooks, setReadingBooks] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const Key = uuid.v4();

  const test2 = [
    {image: require('../../assets/images/horrorBooks/carrie.jpg')},
    {image: require('../../assets/images/horrorBooks/carrie.jpg')},
    {image: require('../../assets/images/horrorBooks/carrie.jpg')},
    {image: require('../../assets/images/horrorBooks/carrie.jpg')},
  ];

  const getBooks = async () => {
    setLoading(true);
    try {
      const result = await booksServices.getData({
        type: 'books',
      });

      const arrayOfObjects = Object.values(result);
      setReadingBooks(arrayOfObjects.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getBooks();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function PostData() {
    database()
      .ref(`/books/${Key}`)
      .set({
        id: Key,
        image: 'https://m.media-amazon.com/images/I/41nngxCNKxL.jpg',
        name: 'aaa',
        gender: 'horror',
        author: 'Stephen King',
      })
      .then(() => console.log('Data set.'));
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.imageContainer}
          source={require('../../assets/images/frederico.png')}
        />
        <TouchableOpacity
          onPress={() => {
            PostData();
          }}
          style={styles.titleContent}>
          <Text style={styles.title}>Bem vindo!</Text>
          <Text style={styles.subtitle}>Que livro você leu hoje?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.readingBooks}>
        <BooksList
          loading={loading}
          isScrollEnabled={false}
          title="Meus Livros"
          data={readingBooks}
          renderItem={({item, index: findex}) => {
            return (
              <View style={styles.listContent} key={findex}>
                <BookInfo image={item.image} key={item.id} date={item.name} />
              </View>
            );
          }}
        />
      </View>
      <View>
        <View style={styles.recomendationTitle}>
          <Text style={styles.title}>Recomendações:</Text>
        </View>
        <View>
          <View style={styles.RecomendationContainer}>
            <BooksList
              loading={loading}
              isScrollEnabled={true}
              title="Porque voce está lendo: It a coisa"
              data={test2}
              renderItem={({item, index: findex}) => {
                return (
                  <View key={findex} style={styles.recomendationContent}>
                    <RecommendationList key={item.id} image={item.image} />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
