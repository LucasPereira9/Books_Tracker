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
  HandleProgress(number: number) {
    const firstDigit = String(number).charAt(0);
    const Transform = '0.' + firstDigit;

    return Number(Transform);
  }
  async filterData(filter: string) {
    const response = await database()
      .ref('/userBooks/')
      .once('value')
      .then(snapshot => {
        const arrayOfObjects = Object.values(snapshot.toJSON());
        var filtered = arrayOfObjects.filter(item => item.status === filter);

        return filtered;
      });
    return response;
  }
}

export default new BooksServices();
