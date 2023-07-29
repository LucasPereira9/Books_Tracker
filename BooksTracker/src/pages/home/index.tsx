import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import BooksList from '../../components/BooksList';
import uuid from 'react-native-uuid';
import {getRealm} from '../../services/database/realm';
import booksServices from '../../services/booksServices';
import database from '@react-native-firebase/database';

export default function Home() {
  const [readingBooks, setReadingBooks] = React.useState([]);

  const [tt, setTt] = React.useState();

  const [recommendedBooks, setRecommendedBooks] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const [gender, setGender] = React.useState<string>('');
  const Key = uuid.v4();

  const GetRecommendBooks = async () => {
    try {
      const result = loading
        ? null
        : await booksServices.FirebaseData({
            type: readingBooks.length === 0 ? 'Terror' : readingBooks[0].gender,
          });

      const arrayOfObjects = Object.values(result);
      console.log('gender: ', readingBooks[0].gender);
      setRecommendedBooks(arrayOfObjects.reverse());
    } catch (error) {
      console.log('ERRORrec', error);
    }
  };

  const getReadingBooks = async () => {
    setLoading(true);
    try {
      const result = await booksServices.FirebaseData({
        type: 'books',
      });

      const arrayOfObjects = Object.values(result);

      setReadingBooks(arrayOfObjects.reverse());
      setTt(readingBooks[0]);
    } catch (error) {
      console.log('ERROR', error);
    } finally {
      console.log(tt);
    }
  };
  React.useLayoutEffect(() => {
    setTimeout(() => {
      GetRecommendBooks();
      console.log('tt', tt);
      setLoading(false);
    }, 3000);
  }, [readingBooks]);

  function PostFirebase() {
    database()
      .ref(`/Terror/${Key}`)
      .set({
        key: Key,
        image:
          'https://osmelhoreslivros.com.br/wp-content/uploads/2020/11/hell-house-198x300.jpg.webp',
        title: 'A Casa Infernal',
        author: 'Richard Matheson',
        gender: 'Terror',
        status: 'recomendation',
        totalPages: '256',
        pagesRead: '0',
        isPagesProgressEnabled: 'false',
        isReading: 'null',
      })
      .then(() => console.log('Data set.'));
  }

  async function PostDB() {
    const realm = await getRealm();

    try {
      realm.write(() => {
        const created = realm.create('MyBooksData', {
          _id: Key,
          image:
            'https://osmelhoreslivros.com.br/wp-content/uploads/2020/11/a-profecia-melhores-livros-de-terror-210x300.jpg.webp',
          title: 'A Profecia',
          author: 'David Seltzer',
          gender: 'Terror',
          status: 'null',
          totalPages: '',
          pagesRead: '320',
          isPagesProgressEnabled: 'false',
          isReading: 'null',
        });
        console.log('created: ', created);
      });
    } catch (error) {
      console.log(error);
    } finally {
      realm.close();
    }
  }

  const GetData = async () => {
    setLoading(true);
    try {
      const result = await booksServices.GetReadingBooks({
        filter: 'null',
      });
      setLoading(false);
      console.log('result: ', result);
    } catch (error) {
      console.log(error);
    }
  };

  async function excluir() {
    const realm = await getRealm();
    try {
      realm.write(() => {
        realm.delete(realm.objects('book'));
      });
      realm.close();
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getReadingBooks();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.imageContainer}
          source={require('../../assets/images/frederico.png')}
        />
        <TouchableOpacity
          onPress={() => {
            PostFirebase();
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
        />
      </View>
      <View>
        <View style={styles.recomendationTitle}>
          <Text style={styles.title}>Recomendações:</Text>
        </View>
        <View>
          <View style={styles.RecomendationContainer}>
            <BooksList
              recommendation={true}
              loading={loading}
              isScrollEnabled={true}
              title="Porque voce está lendo: It a coisa"
              data={recommendedBooks}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
