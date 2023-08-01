import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import theme from '../../../global/theme';
import {IBookInfoProps} from './BookInfo.structure';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BookInfo(props: IBookInfoProps) {
  return (
    <TouchableOpacity
      onPress={props.function}
      activeOpacity={0.7}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.bookContent}>
          <View style={styles.imageContainer}>
            <Image style={styles.imageContent} source={{uri: props.image}} />
          </View>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.status}>
            <Text style={styles.title}>Título</Text>
            <Text>{props.title}</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.title}>Progresso</Text>
            {props.pagesProgress ? (
              <View>
                <Text>
                  {props.pagesRead}/{props.totalPages} páginas
                </Text>
              </View>
            ) : (
              <View>
                <ProgressBar
                  color={theme.colors.primary}
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={props.progress}
                />
                <Text style={styles.progress}>{props.percentage}%</Text>
              </View>
            )}
          </View>
          <View style={styles.status}>
            <Text style={styles.title}>Status</Text>
            <View style={styles.statusContent}>
              <Icon
                style={styles.icon}
                name={props.icon}
                size={15}
                color={props.iconColor}
              />
              <Text style={{color: props.iconColor}}>{props.status}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
