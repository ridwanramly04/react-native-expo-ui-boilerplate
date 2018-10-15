import React from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage,
} from 'react-native';
import { NavigationBar, Title } from '@shoutem/ui'
import registerForPushNotificationsAsync from '../components/registerForPushNotificationsAsync.js'
export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props)
    this.state  = {
      signUp: true
    }
    this.signUpCheck()
  }
  componentWillMount(){
    registerForPushNotificationsAsync()
  }
  signUpCheck = () => {
      this.props.navigation.navigate(this.state.signUp ? 'SignUp' : 'Main');
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar centerComponent={<Title>BLIND !</Title>}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({

});
