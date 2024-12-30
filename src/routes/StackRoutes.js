import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Page1_1, Page1_2, Page1_3} from '../screens';
import {RoutesNames} from '../config';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RoutesNames.PAGE1_1}
        component={Page1_1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutesNames.PAGE1_2}
        component={Page1_2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutesNames.PAGE1_3}
        component={Page1_3}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StackRoutes;
