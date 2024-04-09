import {StyleSheet} from 'react-native';
import React from 'react';

// PROJECT IMPORT
import {useAuth} from '../hooks';
import {Common, Navigator} from '../constant';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';

// THIRD - PARTY IMPORT
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppNavigator = () => {
  const MainStack = createNativeStackNavigator();
  const {user} = useAuth();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
      {user?.access_token ? (
        <>
          {user?.role === Common.VENDOR ? (
            <MainStack.Screen
              name={Navigator.VENDOR_MAIN_STACK}
              component={MainStackNavigator}
            />
          ) : (
            <MainStack.Screen
              name={Navigator.DELIVERY_MAIN_STACK}
              component={MainStackNavigator}
            />
          )}
        </>
      ) : (
        <MainStack.Screen
          name={Navigator.AUTH_STACK}
          component={AuthStackNavigator}
        />
      )}
    </MainStack.Navigator>
  );
};

export default AppNavigator;
