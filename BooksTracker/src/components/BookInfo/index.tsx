import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import theme from '../../../global/theme';

export default function BookInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.bookContent}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContent}
              source={require('../../assets/images/horrorBooks/it.jpg')}
            />
          </View>
        </View>
        <View style={styles.statusContainer}>
          <View>
            <Text style={styles.title}>começo</Text>
            <Text>12/12/2012</Text>
          </View>
          <View>
            <Text style={styles.title}>Progresso</Text>
            <ProgressBar
              color={theme.colors.primary}
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.4}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
