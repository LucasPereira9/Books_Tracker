import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import BooksList from '../../components/booksList';
import booksServices from '../../services/booksServices';
import {INavigationParams} from '../../../global/types';

export default function Home({route: {params}}: INavigationParams<any>) {
  const [recommendedBooks, setRecommendedBooks] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const GetRecommendBooks = async () => {
    setLoading(true);
    try {
      const result = await booksServices.FirebaseData({
        type:
          params.readingBooks.length === 0
            ? 'Aleatorio'
            : params.readingBooks[0]?.gender,
      });

      const arrayOfObjects = Object.values(result);
      setRecommendedBooks(arrayOfObjects.reverse());
      setLoading(false);
    } catch (error) {
      console.log('ERRORrec', error);
    }
  };

  React.useEffect(() => {
    GetRecommendBooks();
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
            // PostFirebase();
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
          data={params.readingBooks}
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
              title={
                params.readingBooks.length === 0
                  ? 'Nossas recomendações'
                  : `Porque você está lendo: ${params.readingBooks[0].title}`
              }
              data={recommendedBooks}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
