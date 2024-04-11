import React from 'react';

// PROJECT IMPORT
import {Navigator} from '../constant';
import Order from '../features/order/Order';

// THIRD - PARTY IMPORT
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderDetails from '../features/order/OrderDetails';
import {OTPverification} from '../features';

const MainStackNavigator = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <MainStack.Screen name={Navigator.ORDER} component={Order} />
      <MainStack.Screen
        name={Navigator.ORDER_DETAILS}
        component={OrderDetails}
      />
      <MainStack.Screen
        name={Navigator.OTP_VERIFICATION}
        component={OTPverification}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
