import React from 'react';

// PROJECT IMPORT
import {Navigator} from '../constant';
import Order from '../features/order/Order';

// THIRD - PARTY IMPORT
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderDetails from '../features/order/OrderDetails';

const MainStackNavigator = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <MainStack.Screen name={Navigator.ORDER} component={Order} />
      <MainStack.Screen name={Navigator.ORDER_DETAILS} component={OrderDetails} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
