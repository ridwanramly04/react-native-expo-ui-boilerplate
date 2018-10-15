/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Container, Item, Picker, Icon } from 'native-base';
import { Text, Heading, Divider, TextInput, Button } from '@shoutem/ui';
export default class AccountScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName:'',
      lastName: '',
      email: '',
      gender: ''
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.views}>
          <Heading style={{color:'#fff'}}>BASIC DETAIL</Heading>
          <Divider/>
          <TextInput
            placeholder={'Nama Pertama'}
            onTextChange={firstName => this.setState({firstName})}
          />
          <Divider/>
          <TextInput
            placeholder={'Nama Kedua'}
            onTextChange={lastName => this.setState({lastName})}
          />
          <Divider/>
          <TextInput
            placeholder={'Alamat Email'}
            onTextChange={email => this.setState({email})}
          />
          <Divider/>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
               style={{ width: '81%', backgroundColor: '#fff' }}
               placeholder="Jantina"
               placeholderStyle={{ color: "#000" }}
               placeholderIconColor="#007aff"
               selectedValue={this.state.gender}
               onValueChange={gender => this.setState({gender})}
            >
              <Picker.Item label="Lelaki" value="lelaki"/>
              <Picker.Item label="Perempuan" value="perempuan"/>
            </Picker>
          </Item>
          <Divider/>
          <Button><Text>Next</Text></Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cec9'
  },
  views:{
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '5%'
  }
});
