import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../global/theme';
import MyBooksPage from './myBooks';
import NewBook from './newBook';
import HomeStack from './home/Routes';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: theme.colors.secondary,
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
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="plus-circle" size={42} color={color} />
          ),
        }}
        name="Adicionar livro"
        component={NewBook}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <Icon name="book" size={30} color={color} />,
        }}
        name="Meus Livros"
        component={MyBooksPage}
      />
    </Tab.Navigator>
  );
}
