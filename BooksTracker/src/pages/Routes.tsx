import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../global/theme';
import Home from './home';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.black,
        tabBarStyle: {
          height: 60,
          backgroundColor: theme.colors.white,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'Roboto-Bold',
        },
        headerShown: false,
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
        }}
        name="Início"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="plus-circle" size={45} color={color} />
          ),
        }}
        name="Adicionar livro"
        component={SettingsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <Icon name="book" size={30} color={color} />,
        }}
        name="Meus Livros"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
