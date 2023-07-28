const Recomendations = [
  {
    key: 1,
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
  },
  {
    key: 2,
    image:
      'https://osmelhoreslivros.com.br/wp-content/uploads/2020/11/o-iluminado-terror-222x300.jpg.webp',
    title: 'O Iluminado',
    author: 'Stephen King',
    gender: 'Terror',
    status: 'recomendation',
    totalPages: '336',
    pagesRead: '0',
    isPagesProgressEnabled: 'false',
    isReading: 'null',
  },
  {
    key: 3,
    image:
      'https://osmelhoreslivros.com.br/wp-content/uploads/2020/11/o-exorcista-206x300.jpg.webp',
    title: 'O Exorcista',
    author: 'William Peter Blatty',
    gender: 'Terror',
    status: 'recomendation',
    totalPages: '280',
    pagesRead: '0',
    isPagesProgressEnabled: 'false',
    isReading: 'null',
  },
  {
    key: 4,
    image:
      'https://osmelhoreslivros.com.br/wp-content/uploads/2020/11/a-profecia-melhores-livros-de-terror-210x300.jpg.webp',
    title: 'A Profecia',
    author: 'David Seltzer',
    gender: 'Terror',
    status: 'recomendation',
    totalPages: '320',
    pagesRead: '0',
    isPagesProgressEnabled: 'false',
    isReading: 'null',
  },
];

export function HandleRecomendation({filter}: {filter: string}) {
  const response = Recomendations.filter(item => item.gender === filter);
  return response;
}
