import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from './styles';

import {IInput} from './input.Structure';
import theme from '../../../global/theme';

export default function Input(props: IInput) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.Container}>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureText}
            value={props.value}
            onChangeText={text => props.setValue(text)}
            placeholder={props.placeholder}
            placeholderTextColor={theme.colors.white}
            style={styles.inputContainer}
          />
        </View>
      </View>
    </View>
  );
}
