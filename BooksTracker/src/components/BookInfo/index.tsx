import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import theme from '../../../global/theme';
import {IBookInfoProps} from './BookInfo.structure';

export default function BookInfo(props: IBookInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.bookContent}>
          <View style={styles.imageContainer}>
            <Image style={styles.imageContent} source={{uri: props.image}} />
          </View>
        </View>
        <View style={styles.statusContainer}>
          <View>
            <Text style={styles.title}>começo</Text>
            <Text>{props.date}</Text>
          </View>
          <View>
            <Text style={styles.title}>Progresso</Text>
            <ProgressBar
              color={theme.colors.primary}
              styleAttr="Horizontal"
              indeterminate={false}
              progress={props.progress}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
