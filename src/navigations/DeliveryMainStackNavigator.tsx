import React from 'react';

// PROJECT IMPORT
import MainStackTabNavigator from './MainStackTabNavigator';
import { Notification } from '../features';
import { Navigator } from '../constant';

// THIRD - PARTY IMPORT
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DeliveryMainStackNavigator = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen
        name={Navigator.NOTIFICATION}
        component={Notification}
      />
    </MainStack.Navigator>
  );
};

export default DeliveryMainStackNavigator;
