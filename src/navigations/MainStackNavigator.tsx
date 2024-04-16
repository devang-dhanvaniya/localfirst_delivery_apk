import React from 'react';

// PROJECT IMPORT
import {Navigator} from '../constant';
import Order from '../features/order/Order';

// THIRD - PARTY IMPORT
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderDetails from '../features/order/OrderDetails';
import {Notification, OTPverification} from '../features';
import {Header} from '../ui';
import {Profile} from '../features/profile';
import Dashboard from '../features/dashboard/Dashboard';
import {commonStyles} from '../styles';
import {View} from 'react-native';

const MainStackNavigator = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: true,
        headerRight: () => <Header />,
      }}>
      <MainStack.Screen name={Navigator.DASHBOARD} component={Dashboard} />
      <MainStack.Screen name={Navigator.ORDER} component={Order} />
      <MainStack.Screen
        name={Navigator.ORDER_DETAILS}
        component={OrderDetails}
      />
      <MainStack.Screen
        name={Navigator.OTP_VERIFICATION}
        component={OTPverification}
      />
      <MainStack.Screen
        name={Navigator.PROFILE}
        options={{title: 'MY PROFILE'}}
        component={Profile}
      />
      <MainStack.Screen
        name={Navigator.NOTIFICATION}
        component={Notification}
        options={{
          title: 'Notification',
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
