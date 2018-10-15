import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/Auth/LoginScreen.js'
import LoadingScreen from '../screens/LoadingScreen.js'
const AuthStack = createStackNavigator({
  Login: LoginScreen
}, {
  navigationOptions:{
    header: null,
  }
})

const LoadingStack = createStackNavigator({
  Loading: LoadingScreen
},{
  navigationOptions:{
    header: null,
  }
})
export {AuthStack, LoadingStack};
