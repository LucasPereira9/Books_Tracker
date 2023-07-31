import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IButtonProps} from './button.structure';
import {styles} from './styles';
import theme from '../../../global/theme';

export default function PrimaryButton(props: IButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        {
          backgroundColor: props.isDisabled
            ? theme.colors.gray
            : theme.colors.secondary,
        },
      ]}
      onPress={props.function}>
      <Text
        style={[
          styles.buttonLabel,
          {color: props.isDisabled ? theme.colors.black : theme.colors.white},
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
