import React from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {styles} from './styles';
import {Image} from 'react-native';
import Input from '../../components/input';
import RadioButton from '../../components/radioButton';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';

export default function NewBook() {
  const Inputs = [
    {
      title: 'titulo:',
      name: 'tile',
      keyboard: 'default',
    },
    {
      title: 'Autor:',
      name: 'author',
      keyboard: 'default',
    },
    {
      title: 'Total de paginas:',
      name: 'pages',
      keyboard: 'numeric',
    },
  ];
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({mode: 'onChange'});

  const onSubmit: SubmitHandler<any> = data => {
    console.log(data);
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, value}}) => (
            <Input
              title={item.title}
              keyboardType={item.keyboard}
              value={value}
              setValue={onChange}
            />
          )}
          name={item.name}
          defaultValue=""
        />
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
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text>LUCAS</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
