import React, {useEffect, useRef} from 'react';
import {Modalize} from 'react-native-modalize';
import PrimaryButton from '../primaryButton';
import {IModal} from './modal.Structure';
import {styles} from './style';
import {Text, View} from 'react-native';
import theme from '../../../global/theme';

export const Modal = (props: IModal) => {
  const myRef = useRef<any>();

  useEffect(() => {
    if (props.opened) {
      myRef.current?.open();
    } else {
      myRef.current?.close();
    }
  }, [props.opened]);

  return (
    <Modalize
      handlePosition="inside"
      handleStyle={{backgroundColor: theme.colors.primary}}
      onOverlayPress={props.pressOut}
      adjustToContentHeight
      ref={myRef}>
      <View style={styles.Container}>
        <View style={styles.Content}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
        <View
          style={[
            styles.buttonContainer,
            {flexDirection: props.secondButton ? 'row' : undefined},
          ]}>
          <View style={{width: '50%'}}>
            <PrimaryButton
              loading={props.loading}
              function={props.buttonFunction}
              title={props.buttonTitle}
            />
          </View>
          {props.secondButton && (
            <View style={{width: '50%'}}>
              <PrimaryButton function={props.pressOut} title="Cancelar" />
            </View>
          )}
        </View>
      </View>
    </Modalize>
  );
};
