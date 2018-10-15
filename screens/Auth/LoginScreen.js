/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Container } from 'native-base';
import { TextInput, Button, Text, Divider} from '@shoutem/ui';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
export default class LoginScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      otp: false,
      code: '',
      number: ''
    }
  }

  signIn = () => {
    this.setState({
      otp: true
    })
  }
  render() {
    const PinCode = () => (
       <View style={styles.form}>
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
          <SmoothPinCodeInput
            cellStyle={{
              backgroundColor: '#fff',
              borderRadius: 5
            }}
            value={this.state.code}
            onTextChange={code => this.setState({code})}
          />
        </View>
        <Divider/>
        <Button>
          <Text>Next</Text>
        </Button>
      </View>
    )
    const Number = () => (
      <View style={styles.form}>
        <TextInput placeholder={'Phone 60112345678'} keyboardType={'phone-pad'} />
        <Divider/>
        <Button onPress={this.signIn()}>
          <Text>Sign In / Sign Up</Text>
        </Button>
      </View>
    )
    return (
      <Container style={styles.container}>


          {this.state.otp ? <PinCode/> : <Number/> }


      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00cec9'
  },
  form:{
    marginTop: Dimensions.get('window').height / 100 * 45,
    marginLeft: '5%',
    marginRight: '5%'
  }
});
