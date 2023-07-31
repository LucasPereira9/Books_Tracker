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
import {Dropdown} from 'react-native-element-dropdown';
import PrimaryButton from '../../components/primaryButton';
import database from '@react-native-firebase/database';
import uuid from 'react-native-uuid';
import {CommonActions, useNavigation} from '@react-navigation/native';

export default function NewBook() {
  const navigation = useNavigation();
  const Key = uuid.v4();

  const GenderList = [
    {label: 'Aventura', value: 'Aventura'},
    {label: 'Drama', value: 'Drama'},
    {label: 'Romance', value: 'Romance'},
    {label: 'Suspense', value: 'Suspense'},
    {label: 'Terror', value: 'Terror'},
  ];

  const [image, setImage] = React.useState<string>(
    'https://netrinoimages.s3.eu-west-2.amazonaws.com/2022/12/11/1375341/427065/gallery_icon_3d_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4405244_o.png',
  );

  const Inputs = [
    {
      title: 'titulo:',
      name: 'title',
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
    database()
      .ref(`/userBooks/${Key}`)
      .set({
        key: Key,
        image: image,
        title: data.title,
        author: data.author,
        gender: data.gender.value,
        status: 'null',
        totalPages: data.pages,
        pagesRead: '0',
        isPagesProgressEnabled: data.progressOption === '1' ? true : false,
        isReading: 'null',
      })
      .then(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Início'}],
          }),
        );
      });

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
        <Text style={styles.genderTitle}>Gênero:</Text>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, value}}) => (
            <Dropdown
              iconColor={theme.colors.secondary}
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={GenderList}
              iconStyle={styles.iconStyle}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Selecione um gênero"
              searchPlaceholder="Procurar..."
              value={value}
              onChange={onChange}
            />
          )}
          name="gender"
          defaultValue=""
        />
      </View>
      <View style={styles.radioContainer}>
        <Text style={styles.radioTitle}>
          Como gostaria de exibir o seu progresso?
        </Text>

        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, value}}) => (
            <RadioButton value={value} setValue={onChange} />
          )}
          name="progressOption"
          defaultValue=""
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          isDisabled={!isValid}
          title="Adicionar"
          function={handleSubmit(onSubmit)}
        />
      </View>
    </ScrollView>
  );
}
