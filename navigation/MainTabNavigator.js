import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import RestaurantsScreen from '../screens/RestaurantsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const RestaurantsStack = createStackNavigator({
  Restaurants: RestaurantsScreen,
});

RestaurantsStack.navigationOptions = {
  tabBarLabel: 'Restaurants',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const CheckoutStack = createStackNavigator({
  Checkout: CheckoutScreen,
});

CheckoutStack.navigationOptions = {
  tabBarLabel: 'Checkout',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  RestaurantsStack,
  ProfileStack,
  CheckoutStack,
});
