export const BookSchema = {
  name: 'MyBooksData',
  properties: {
    _id: 'string',
    image: 'string',
    title: 'string',
    author: 'string',
    gender: 'string',
    status: 'string',
    totalPages: 'string',
    pagesRead: 'string',
    isPagesProgressEnabled: 'string',
    isReading: 'string',
  },
  primaryKey: '_id',
};
