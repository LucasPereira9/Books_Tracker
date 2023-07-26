import database from '@react-native-firebase/database';

class BooksServices {
  async getData({type}: {type: string}): Promise<any> {
    try {
      const response = await database()
        .ref(`/${type}/`)
        .once('value')
        .then(snapshot => {
          return snapshot.toJSON();
        });
      return response;
    } catch (error: any) {
      console.log('booksError: ', error);
    }
  }
}

export default new BooksServices();
