import {
    View,
    Button,
    Text,
    TextInput,
    ScrollView,
    StyleSheet,
    Switch,
    TouchableOpacity,
    KeyboardAvoidingView,
  } from 'react-native';
  import React, { Component } from 'react';
  
  
  export default class settingScreen extends React.Component {
    constructor() {
      super();
      this.state = {
       
      };
    }
  
    
  
    render() {
      return (
       <View style={styles.container}>
           <Text style={styles.text}>
               this is setting  screen
           </Text>
       </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:25,
        color:'red'
    }
  });
  