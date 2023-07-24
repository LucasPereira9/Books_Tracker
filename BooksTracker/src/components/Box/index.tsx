import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../../global/theme';
import {IBoxProps} from './Box.structure';

export default function Box(props: IBoxProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContent}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <TouchableOpacity
        onPress={props.leftIconFunction}
        activeOpacity={0.8}
        style={styles.iconContainer}>
        {props.isIconLeftVisible ? (
          <Icon
            name="arrow-circle-left"
            size={40}
            color={theme.colors.secondary}
          />
        ) : null}
      </TouchableOpacity>
      <View style={styles.content}>{props.content}</View>
      <TouchableOpacity
        onPress={props.rightIconFunction}
        activeOpacity={0.8}
        style={styles.iconContainer}>
        {props.isIconRightVisible ? (
          <Icon
            name="arrow-circle-right"
            size={40}
            color={theme.colors.secondary}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
}
