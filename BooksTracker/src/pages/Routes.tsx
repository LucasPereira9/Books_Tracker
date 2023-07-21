import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../global/theme';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <View style={{backgroundColor: '#fff', width: 200, height: 200}}>
        <Icon name="home" size={160} color="red" />
      </View>
    </View>
  );
}

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
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          height: 60,
          backgroundColor: '#fff',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#blue',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'Roboto-Bold',
        },
        headerShown: false,
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Icon name="home" size={30} color={theme.colors.black} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="home" size={30} color="blue" />,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="book" size={30} color="blue" />,
        }}
        name="Books"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
