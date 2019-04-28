import React from 'react';
import { Platform, Image  } from 'react-native';
import { createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import RestaurantsScreen from '../screens/RestaurantsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const RestaurantsStack = createStackNavigator({
  Restaurants: RestaurantsScreen,
});

RestaurantsStack.navigationOptions = {
  tabBarLabel: 'Restaurants',
  tabBarIcon: ({ tintColor }) => (
    <Image source={require
    ('../assets/images/restaurants-icon-unfocused.png')}
    style={{height: 16, width: 16, tintColor: tintColor }}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Image source={require
    ('../assets/images/profile-icon-unfocused.png')}
    style={{height: 16, width: 16, tintColor: tintColor }}
    />
  ),
};

const CheckoutStack = createStackNavigator({
  Checkout: CheckoutScreen,
});

CheckoutStack.navigationOptions = {
  tabBarLabel: 'Checkout',
  tabBarIcon: ({ tintColor }) => (
    <Image source={require
    ('../assets/images/checkout-icon-unfocused.png')}
    style={{height: 16, width: 16, tintColor: tintColor }}
    />
  ),
};

export default createBottomTabNavigator({
  RestaurantsStack,
  ProfileStack,
  CheckoutStack,
}, {
  tabBarOptions: {
    activeTintColor: '#8DB87B',
    inactiveTintColor: 'grey',
    labelStyle: {
      fontSize: 13,
      fontFamily: 'nunito-bold',
      margin: 0,
      padding: 0
    },
  }
});
