import React from 'react';
import {FlatList, Text, View} from 'react-native';
import BookInfo from '../../../components/BookInfo';

export default function InProgressBoks() {
  const dataTest = [
    {
      image: '',
      date: '22/22/2012',
      progress: 0.2,
    },
    {
      image: '',
      date: '22/22/2012',
      progress: 0.9,
    },
    {
      image: '',
      date: '22/22/2012',
      progress: 0.5,
    },
    {
      image: '',
      date: '22/22/2012',
      progress: 0.7,
    },
  ];

  const renderItem = ({item}: IItemProps) => {
    return (
      <View
        style={{
          height: 200,
          width: '80%',
          marginLeft: 18,
        }}>
        <BookInfo date={item.date} progress={item.progress} />
      </View>
    );
  };
  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <FlatList data={dataTest} renderItem={renderItem} />
      </View>
    </View>
  );
}
