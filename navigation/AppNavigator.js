import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import {AuthStack, LoadingStack} from './AuthNavigator.js'
import SignUpStack from './SignUpNavigator.js'
export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Auth: AuthStack,
  SignUp: SignUpStack,
  Load: LoadingStack
}, {
  initialRouteName: 'Load'
});
