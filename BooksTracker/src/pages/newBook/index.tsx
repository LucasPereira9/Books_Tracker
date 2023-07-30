import React from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {styles} from './styles';
import {Image} from 'react-native';
import Input from '../../components/input';
import RadioButton from '../../components/radioButton';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../../global/theme';
import {launchImageLibrary} from 'react-native-image-picker';

export default function NewBook() {
  const [image, setImage] = React.useState<string>(
    'https://netrinoimages.s3.eu-west-2.amazonaws.com/2022/12/11/1375341/427065/gallery_icon_3d_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4405244_o.png',
  );

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

  const imagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        null;
      } else {
        setImage(response.assets[0].uri);
      }
    });
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
        <Text style={styles.title}>Adicionar um livro:</Text>

        <TouchableOpacity
          onPress={() => imagePicker()}
          activeOpacity={0.8}
          style={styles.imageContainer}>
          <Image
            style={styles.imageContent}
            source={{
              uri: image,
            }}
          />
          <View style={styles.galeryIcon}>
            <Icon name="camera" size={27} color={theme.colors.black} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.inputsContainer}>
        <FlatList scrollEnabled={false} data={Inputs} renderItem={renderItem} />
      </View>
      <View style={styles.radioContainer}>
        <Text style={styles.radioTitle}>
          Como gostaria de exibir o seu progresso?
        </Text>
        <RadioButton />
      </View>
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text>LUCAS</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
