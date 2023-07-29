import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

export function Input() {
  return (
    <View style={styles.container}>
      <Text>ALALA</Text>
      <View>
        <TextInput style={styles.inputContainer} placeholder="sixismx" />
      </View>
    </View>
  );
}
