import {getRealm} from './database/realm';

class BooksServices {
  async getData({filter}: {filter: string}): Promise<any> {
    const realm = await getRealm();
    try {
      const response = realm
        .objects('MyBooksData')
        .filtered(`status = '${filter}'`);
      return response;
    } catch (error: any) {
      console.log('booksError: ', error);
    }
  }
}

export default new BooksServices();
