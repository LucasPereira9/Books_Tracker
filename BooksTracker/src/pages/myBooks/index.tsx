import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import theme from '../../../global/theme';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs({TabScreens}: {TabScreens: any}) {
  const renderList = React.useMemo(() => {
    return TabScreens.map((item: ITopNavigatorProps, index: number) => (
      <Tab.Screen
        key={index}
        name={item.name}
        component={item.component as FunctionComponent<{}>}
      />
    ));
  }, []);

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarScrollEnabled: true,
          tabBarActiveTintColor: organization.settings.PERSONAL.primary_color,
          tabBarInactiveTintColor: colors.black,
          tabBarStyle: {
            backgroundColor: colors['gray-100'],
          },
          tabBarIndicatorStyle: {
            backgroundColor: organization.settings.PERSONAL.primary_color,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Roboto-Bold',
          },
        })}
        style={styles.tabNavigatorStyle}>
        {renderList}
      </Tab.Navigator>
    </View>
  );
}
