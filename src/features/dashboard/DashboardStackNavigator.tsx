import React from 'react';

// PROJECT IMPORT
import {Navigator} from '../../constant';
import Dashboard from './Dashboard';

// THIRD - PARTY IMPORT
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const DashboardStackNavigator = () => {
  const DashboardStack = createNativeStackNavigator();

  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name={Navigator.DASHBOARD}
        component={Dashboard}
        options={{
          title: 'Dashboard',
        }}
      />
      
    </DashboardStack.Navigator>
  );
};

export default DashboardStackNavigator;
