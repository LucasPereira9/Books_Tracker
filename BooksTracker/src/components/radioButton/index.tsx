import React from 'react';
import {View} from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';
import {styles} from './styles';
import {IRadioProps} from './radioButton.structure';

export default function RadioButton(props: IRadioProps) {
  const radioButtons = React.useMemo(
    () => [
      {
        id: '1',
        label: 'Páginas',
        value: 'option1',
      },
      {
        id: '2',
        label: 'Porcentagem',
        value: 'option2',
      },
    ],
    [],
  );
  return (
    <View style={styles.Container}>
      <RadioGroup
        layout="row"
        radioButtons={radioButtons}
        onPress={props.setValue}
        selectedId={props.value}
      />
    </View>
  );
}
