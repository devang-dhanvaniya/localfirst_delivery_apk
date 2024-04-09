import React from 'react';

// UI IMPORT
import {Icon, IconKeys} from '../ui';

// PROJECT IMPORT
import {DashboardStackNavigator} from '../features';
import {Colors, Navigator} from '../constant';

// THIRD - PARTY IMPORT
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

interface TabsTypes {
  name: string;
  title: string;
  Component: (e?: any) => React.JSX.Element;
  icon: IconKeys;
}

const Tabs: TabsTypes[] = [
  {
    name: Navigator.DASHBOARD_STACK,
    title: 'Dashboard',
    Component: DashboardStackNavigator,
    icon: 'DashboardIcon',
  },
];

const MainStackTabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator activeColor={Colors.YELLOW}>
      {Tabs?.map((item, index) => {
        const {Component, name, icon, title} = item;
        return (
          <>
            <Tab.Screen
              options={{
                tabBarIcon: ({focused}) => (
                  <Icon
                    name={icon}
                    stroke={focused ? Colors.YELLOW : Colors.BLACK}
                  />
                ),
                title: title,
              }}
              key={index}
              name={name}
              component={Component}
            />
          </>
        );
      })}
    </Tab.Navigator>
  );
};

export default MainStackTabNavigator;
