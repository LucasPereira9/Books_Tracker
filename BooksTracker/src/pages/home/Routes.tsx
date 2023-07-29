import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from './index';
import Splash from './splash';

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
