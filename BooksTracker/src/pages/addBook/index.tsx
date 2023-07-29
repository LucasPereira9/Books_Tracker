import React from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {styles} from './styles';
import {Image} from 'react-native';
import {Input} from '../../components/input';
import RadioButton from '../../components/radioButton';

export default function NewBook() {
  const Inputs = [
    {
      title: 'titulo:',
    },
    {
      title: 'Autor:',
    },
    {
      title: 'Gênero',
    },
    {
      title: 'Total de paginas:',
    },
  ];

  const renderItem = ({item}: IItemProps) => {
    return (
      <View>
        <Input />
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.title}>LAL</Text>

        <TouchableOpacity style={styles.imageContainer}>
          <Image
            style={styles.imageContent}
            source={require('../../assets/images/galleryLogo.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputsContainer}>
        <FlatList scrollEnabled={false} data={Inputs} renderItem={renderItem} />
      </View>
      <View>
        <Text>Como gostaria de exibir o seu progresso?</Text>
        <RadioButton />
      </View>
    </ScrollView>
  );
}
