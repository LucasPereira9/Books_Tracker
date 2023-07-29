import database from '@react-native-firebase/database';

class BooksServices {
  async FirebaseData({type}: {type: string}): Promise<any> {
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
  HandlePercentage = (x: number, y: number) => {
    return (x / y) * 100;
  };
}

export default new BooksServices();
