import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../assets/icon';
import {DashboardHome} from '../Home';
import {MyBooking} from '../MyBooking';
import {Notification} from '../Notification';
import {Profile} from '../Profile';

const Tab = createBottomTabNavigator();

export const Dashboard = () => {
  return (
    <Tab.Navigator
      initialRouteName="DashboardHome"
      screenOptions={{
        tabBarActiveTintColor: '#1A8EF1',
      }}>
      <Tab.Screen
        name="DashboardHome"
        component={DashboardHome}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml
                xml={IconLibrary.HOME_ACTIVE}
                width="24px"
                height="24px"
              />
            ) : (
              <SvgXml
                xml={IconLibrary.HOME_INACTIVE}
                width="24px"
                height="24px"
              />
            ),
        }}
      />
      <Tab.Screen
        name="MyBooking"
        component={MyBooking}
        options={{
          tabBarLabel: 'My Booking',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml
                xml={IconLibrary.MY_BOOKING_ACTIVE}
                width="24px"
                height="24px"
              />
            ) : (
              <SvgXml
                xml={IconLibrary.MY_BOOKING_INACTIVE}
                width="24px"
                height="24px"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml
                xml={IconLibrary.NOTIFICATION_ACTIVE}
                width="24px"
                height="24px"
              />
            ) : (
              <SvgXml
                xml={IconLibrary.NOTIFICATION_INACTIVE}
                width="24px"
                height="24px"
              />
            ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml
                xml={IconLibrary.PROFILE_ACTIVE}
                width="24px"
                height="24px"
              />
            ) : (
              <SvgXml
                xml={IconLibrary.PROFILE_INACTIVE}
                width="24px"
                height="24px"
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
