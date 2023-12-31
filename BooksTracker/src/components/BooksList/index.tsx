import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Box from '../Box';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../../global/theme';
import {IBookList} from './BookList.structure';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import BookInfo from '../BookInfo';
import RecommendationList from '../RecommendationList';
import {useNavigation} from '@react-navigation/native';
import booksServices from '../../services/booksServices';

export default function BooksList(props: IBookList) {
  const ref = React.useRef<FlatList>(null);
  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation();

  const [isLeftIconVisible, setIsLeftIconVisible] =
    React.useState<boolean>(true);
  const [isRightIconVisible, setIsRightIconVisible] =
    React.useState<boolean>(true);

  function ValidateIcons() {
    if (index === 0) {
      setIsLeftIconVisible(false);
    } else {
      setIsLeftIconVisible(true);
    }
    if (index === props.data.length - 1 || props.data.length === 0) {
      setIsRightIconVisible(false);
    } else {
      setIsRightIconVisible(true);
    }
  }

  React.useEffect(() => {
    ValidateIcons();
    if (
      props.data?.length === 0
        ? null
        : ref.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5,
          })
    ) {
      ref.current?.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    }
  });

  return (
    <View>
      <Box
        title={props.title}
        isIconLeftVisible={isLeftIconVisible}
        isIconRightVisible={isRightIconVisible}
        content={
          <View>
            {props.data?.length === 0 && !props.recommendation ? (
              <TouchableOpacity
                onPress={() => navigation.navigate('Adicionar livro')}
                activeOpacity={0.7}
                style={styles.dashedButton}>
                <Icon name="plus" size={35} color={theme.colors.black} />
                <Text>Adicionar livro</Text>
              </TouchableOpacity>
            ) : props.loading ? (
              <View style={styles.progressBar}>
                <ProgressBar
                  color={theme.colors.black}
                  styleAttr="Normal"
                  indeterminate={false}
                />
              </View>
            ) : (
              <FlatList
                scrollEnabled={props.isScrollEnabled}
                ref={ref}
                initialScrollIndex={index}
                keyExtractor={item => item.key}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.data}
                renderItem={({item}) => {
                  return (
                    <>
                      {props.recommendation ? (
                        <View
                          key={item.key}
                          style={styles.recomendationContent}>
                          <RecommendationList
                            function={() =>
                              navigation.navigate('Adicionar livro', {item})
                            }
                            key={item.id}
                            image={item.image}
                          />
                        </View>
                      ) : (
                        <View style={styles.ReadingBooksContent} key={item.key}>
                          <BookInfo
                            function={() =>
                              navigation.navigate('EditBook', {item})
                            }
                            icon={
                              item.status === 'finalizado'
                                ? 'check-square'
                                : item.status === 'lendo'
                                ? 'play-circle'
                                : 'book'
                            }
                            iconColor={
                              item.status === 'finalizado'
                                ? theme.colors.success
                                : item.status === 'lendo'
                                ? theme.colors.secondary
                                : theme.colors.black
                            }
                            status={item.status}
                            progress={
                              item.percentage === 100
                                ? 1
                                : booksServices.HandleProgress(item.percentage)
                            }
                            percentage={item.percentage}
                            pagesRead={item.pagesRead}
                            totalPages={item.totalPages}
                            pagesProgress={item.isPagesProgressEnabled}
                            image={item.image}
                            key={item.id}
                            title={item.title}
                          />
                        </View>
                      )}
                    </>
                  );
                }}
              />
            )}
          </View>
        }
        leftIconFunction={() => {
          if (index === 0) {
            return;
          }
          setIndex(index - 1);
        }}
        rightIconFunction={() => {
          if (index === props.data.length - 1) {
            return;
          }
          setIndex(index + 1);
        }}
      />
    </View>
  );
}
