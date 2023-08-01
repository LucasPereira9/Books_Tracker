import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import theme from '../../../global/theme';
import {styles} from './styles';
import InProgressBoks from './inProgress';
import BookCase from './bookCase';
import FinishedBooks from './finished';

const Tab = createMaterialTopTabNavigator();

export default function MyBooksPage() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.black,
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.primary,
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
        })}
        style={styles.tabNavigatorStyle}>
        <Tab.Screen name={'Lendo'} component={InProgressBoks} />
        <Tab.Screen name={'Estante'} component={BookCase} />
        <Tab.Screen name={'Finalizados'} component={FinishedBooks} />
      </Tab.Navigator>
    </View>
  );
}
