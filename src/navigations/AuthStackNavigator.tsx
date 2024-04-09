import React from 'react';

// PROJECT IMPORT
import {Login} from '../features';
import {Navigator} from '../constant';

// THIRD - PARTY IMPORT
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStackNavigator = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={Navigator.LOGIN} component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
