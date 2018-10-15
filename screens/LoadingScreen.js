/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import { Container } from 'native-base';

export default class LoadingScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      animation: null
    }
    this._bootstrapAsync()

  }
  componentWillMount() {
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // const userToken = await AsyncStorage.getItem('token');
    const userToken = false;
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  };
  render() {
    return (
      <Container style={styles.contain}>
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contain:{
    backgroundColor: '#00cec9'
  },
  container: {
    marginTop: Dimensions.get('window').height / 100 * 45
  },
});
