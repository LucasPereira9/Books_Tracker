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
import {CommonActions, useNavigation} from '@react-navigation/native';
import {INavigationParams} from '../../../global/types';
import booksServices from '../../services/booksServices';
import {Modal} from '../../components/modal';

export default function EditBook({route: {params}}: INavigationParams<any>) {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string>(params.item.image);
  const [modal, setModal] = React.useState<boolean>(false);

  const GenderList = [
    {label: 'Aventura', value: 'Aventura'},
    {label: 'Drama', value: 'Drama'},
    {label: 'Romance', value: 'Romance'},
    {label: 'Suspense', value: 'Suspense'},
    {label: 'Terror', value: 'Terror'},
  ];
  const StatusList = [
    {label: 'lendo', value: 'lendo'},
    {label: 'na estante', value: 'na estante'},
    {label: 'finalizado', value: 'finalizado'},
  ];

  const Inputs = [
    {
      title: 'titulo:',
      name: 'title',
      keyboard: 'default',
      defaultVal: params.item.title,
    },
    {
      title: 'Autor:',
      name: 'author',
      keyboard: 'default',
      defaultVal: params.item.author,
    },
    {
      title: 'Páginas já lidas:',
      name: 'pagesRead',
      keyboard: 'numeric',
      defaultVal: params.item.pagesRead,
    },
    {
      title: 'Total de paginas:',
      name: 'pages',
      keyboard: 'numeric',
      defaultVal: params.item.totalPages,
    },
  ];
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({mode: 'onChange'});

  const onSubmit: SubmitHandler<any> = data => {
    setLoading(true);
    const percentage = booksServices.HandlePercentage(
      data.pagesRead,
      data.pages,
    );
    const firstTwoNumbers = String(percentage).substring(0, 3);
    database()
      .ref(`/userBooks/${params.item.key}`)
      .update({
        key: params.item.key,
        image: image,
        title: data.title,
        author: data.author,
        gender: data.gender.value,
        status: data.status.value,
        totalPages: data.pages,
        pagesRead: data.pagesRead,
        isPagesProgressEnabled: data.progressOption === '1' ? true : false,
        percentage: Number(firstTwoNumbers),
      })
      .then(() => {
        setLoading(false);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Início'}],
          }),
        );
      });
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
          defaultValue={item.defaultVal}
        />
      </View>
    );
  };

  async function DeleteBook() {
    setLoading(true);
    try {
      await database().ref(`/userBooks/${params.item.key}`).remove();
      setModal(false);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Início'}],
        }),
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.topContent}>
          <Text style={styles.title}>Editar livro:</Text>
          <TouchableOpacity
            onPress={() => setModal(true)}
            activeOpacity={0.7}
            style={styles.trashIcon}>
            <Icon name="trash" size={32} color={'red'} />
          </TouchableOpacity>

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

        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            livro adicionado em: {params.item.date}
          </Text>
        </View>

        <View style={styles.inputsContainer}>
          <FlatList
            scrollEnabled={false}
            data={Inputs}
            renderItem={renderItem}
          />
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
            defaultValue={params.item.gender}
          />
          <Text style={styles.genderTitle}>Status:</Text>
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
                data={StatusList}
                iconStyle={styles.iconStyle}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Selecione o status"
                searchPlaceholder="Procurar..."
                value={value}
                onChange={onChange}
              />
            )}
            name="status"
            defaultValue={params.item.status}
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
            loading={loading}
            isDisabled={!isValid}
            title="Salvar"
            function={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
      <Modal
        loading={loading}
        title="Excluir livro"
        subtitle="Você está prestes a excluir este livro. e esta ação não pode ser desfeita."
        pressOut={() => setModal(false)}
        buttonTitle="Excluir"
        buttonFunction={() => DeleteBook()}
        opened={modal}
        secondButton={true}
      />
    </>
  );
}
