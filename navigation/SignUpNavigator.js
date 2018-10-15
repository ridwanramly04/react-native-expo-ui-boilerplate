import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import AccountScreen from '../screens/Auth/SignUp/AccountScreen.js'
const SignUpStack = createStackNavigator({
  Account: AccountScreen
}, {
  navigationOptions:{
    header: null,
  }
})

export default SignUpStack;
