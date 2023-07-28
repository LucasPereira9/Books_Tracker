import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import BooksList from '../../components/BooksList';
import uuid from 'react-native-uuid';
import {getRealm} from '../../services/database/realm';
import booksServices from '../../services/booksServices';
import {HandleRecomendation} from '../../utils';

export default function Home() {
  const [readingBooks, setReadingBooks] = React.useState([]);

  const [recommendedBooks, setRecommendedBooks] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const Key = uuid.v4();

  const test2 = [
    {image: require('../../assets/images/horrorBooks/carrie.jpg')},
    {image: require('../../assets/images/horrorBooks/carrie.jpg')},
    {image: require('../../assets/images/horrorBooks/carrie.jpg')},
    {image: require('../../assets/images/horrorBooks/carrie.jpg')},
  ];

  function GetRecommendationBooks() {
    const response = HandleRecomendation({filter: 'Terror'});
    setRecommendedBooks(response);
  }

  async function Teste() {
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
      console.log('deu certin');
    }
  }

  const GetData = async () => {
    setLoading(true);
    try {
      const result = await booksServices.getData({
        filter: 'null',
      });
      setLoading(false);
      GetRecommendationBooks();
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
    GetData();
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
            Teste();
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
