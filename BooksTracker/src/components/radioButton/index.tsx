import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

export default function RadioButton() {
  const [selectedId, setSelectedId] = React.useState<string | undefined>();
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
    <View>
      <RadioGroup
        layout="row"
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
      />
      <TouchableOpacity onPress={() => console.log(selectedId)}>
        <Text>LALAL</Text>
      </TouchableOpacity>
    </View>
  );
}
