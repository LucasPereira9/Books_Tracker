import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from './index';
import Splash from './splash';
import EditBook from '../editBook';

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditBook" component={EditBook} />
    </Stack.Navigator>
  );
}
