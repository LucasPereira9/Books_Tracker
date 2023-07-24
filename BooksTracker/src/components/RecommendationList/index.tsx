import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {IRecomendationProps} from './Recommendation.structure';
import {styles} from './styles';

export default function RecommendationList(props: IRecomendationProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.imageContainer}>
      <Image style={styles.imageContent} source={props.image} />
    </TouchableOpacity>
  );
}
