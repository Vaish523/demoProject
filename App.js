import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View , Image, TouchableOpacity, Alert, NavigatorIOS} from 'react-native';
import {Button, Colors, colors, ThemeProvider, } from 'react-native-elements'
import { render } from 'react-dom';
import * as Font from 'expo-font';

export default function App() {
  // console.log('hello console world!');
  // componentDidMount(){
  //   Font.loadAsync({
  //     'vollkorn': require('./assets/fonts/vollkorn/Vollkorn-Regular.ttf'),
  //   });
  // },
  
  return(
    <View style={styles.container}>
      <Image style={{width:150, height:150}} source={require('./assets/icon.png')}></Image>
      {/* vollkorn font, 36 */}
      <Text style={styles.titleText}>Welcome to FBLApp</Text> 
      <Button color="#BE2F37" style={styles.buttonLogIn} title="Log-In"></Button>
      <Button style={styles.buttonSignUp} title="Sign-Up"></Button>
      {/* <TouchableOpacity style={styles.buttonLogIn} onPress={alert('hi')}>
        <Text>Log-In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSignUp} onPress={alert('hi')}>
        <Text>Sign-Up</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogIn: {
    //backgroundColor: '#BE2F37',
    padding: 0,
    width: 267,
    height: 52,
    color: 'red'
    //alignItems: 'center',
    //alignContent: 'center',
  },
  buttonSignUp: {
    //backgroundColor: '#BE2F37',
    padding: 0,
    width: 267,
    height: 52,
    //alignItems: 'center',
  },
  titleText:{
    fontSize: 34,
    // fontFamily: 'vollkorn'
  }
});

AppRegistry.registerComponent('demoProject', () => demoProject);