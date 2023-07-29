import Realm from 'realm';
import {BookSchema} from './schema';

export const getRealm = async () =>
  await Realm.open({
    path: 'booksR',
    schema: [BookSchema],
  });
