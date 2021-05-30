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
import TabsController from './src/navigation/mainNavigation';
import { Provider } from 'react-redux';
import { store } from './src/Redux/configration';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }



  render() {
    return (
      <Provider store={store}>
        <TabsController />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
