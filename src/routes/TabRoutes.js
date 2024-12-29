import * as React from 'react';
import {Page1_1, Page1_2, Page1_3} from '../screens';
import {RoutesNames} from '../config';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Icons from '../assets/icons';

const MyTabs = createBottomTabNavigator();

export default TabRoutes = () => {
  return (
    <MyTabs.Navigator
      screenOptions={{
        tabBarStyle: {height:60,borderColor:'white'},
      }}>
      <MyTabs.Screen
        name={RoutesNames.PAGE1_2}
        component={Page1_2}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: 'black',
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image source={Icons.home} style={{tintColor: 'gray'}} />
          ),
        }}
      />
      <MyTabs.Screen
        name={RoutesNames.PAGE1_1}
        component={Page1_1}
        options={{
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: 'black',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: () => <Image source={Icons.clock} />,
        }}
      />
      <MyTabs.Screen
        name={RoutesNames.PAGE1_3}
        component={Page1_3}
        options={{
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: 'black',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: () => (
            <Image source={Icons.heart} style={{tintColor: 'gray'}} />
          ),
        }}
      />
      <MyTabs.Screen
        name="user"
        component={Page1_2}
        options={{
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: 'black',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image source={Icons.user} style={{tintColor: 'gray'}} />
          ),
        }}
      />
    </MyTabs.Navigator>
  );
};
