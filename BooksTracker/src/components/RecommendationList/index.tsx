import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {IRecomendationProps} from './Recommendation.structure';
import {styles} from './styles';

export default function RecommendationList(props: IRecomendationProps) {
  return (
    <TouchableOpacity
      onPress={props.function}
      activeOpacity={0.7}
      style={styles.imageContainer}>
      <Image style={styles.imageContent} source={{uri: props.image}} />
    </TouchableOpacity>
  );
}
