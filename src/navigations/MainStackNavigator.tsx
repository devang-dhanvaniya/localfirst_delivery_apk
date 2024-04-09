import React from 'react';

// PROJECT IMPORT
import MainStackTabNavigator from './MainStackTabNavigator';
import { Notification } from '../features';
import { Navigator } from '../constant';

// THIRD - PARTY IMPORT
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStackNavigator = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen
        name={Navigator.VENDOR_MAIN_TAB}
        component={MainStackTabNavigator}
      />
      <MainStack.Screen
        name={Navigator.NOTIFICATION}
        component={Notification}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
