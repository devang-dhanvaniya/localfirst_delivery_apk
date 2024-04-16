import React from 'react';

// PROJECT IMPORT
import {useAuth} from '../hooks';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';

// THIRD - PARTY IMPORT
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Navigator} from '../constant';
import { View } from 'react-native';
import { commonStyles } from '../styles';

const AppNavigator = () => {
  const MainStack = createNativeStackNavigator();
  const {user} = useAuth();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user?.token ? (
        <>
          <MainStack.Screen
            name={Navigator.DELIVERY_MAIN_STACK}
            component={MainStackNavigator}
          />
        </>
      ) : (
        <>
          <MainStack.Screen
            name={Navigator.AUTH_STACK}
            component={AuthStackNavigator}
          />
        </>
      )}
    </MainStack.Navigator>
  );
};

export default AppNavigator;
