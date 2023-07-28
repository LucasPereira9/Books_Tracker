import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import BooksList from '../../components/BooksList';
import BookInfo from '../../components/BookInfo';
import RecommendationList from '../../components/RecommendationList';
import uuid from 'react-native-uuid';
import {getRealm} from '../../services/database/realm';
import booksServices from '../../services/booksServices';

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

  async function Teste() {
    const realm = await getRealm();

    try {
      realm.write(() => {
        const created = realm.create('MyBooksData', {
          _id: Key,
          image:
            'https://as2.ftcdn.net/v2/jpg/01/96/52/31/1000_F_196523185_k6LSUluqRnbrVsOskQcujOsxvnhHE87p.jpg',
          title: 'TESTE',
          author: 'TESTE',
          gender: 'Terror',
          status: 'null',
          totalPages: '256',
          pagesRead: '0',
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
      console.log('NEW DATA: ', result);
      setReadingBooks(result);
      setLoading(false);
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
          renderItem={({item, index: findex}) => {
            return (
              <View style={styles.listContent} key={findex}>
                <BookInfo image={item.image} key={item.id} date={item.title} />
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
              data={readingBooks}
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
