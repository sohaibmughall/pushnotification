import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/signin/login';
import Home from './src/screens/Home/Home';
import { Avatar, Image } from 'react-native-elements';
import Signup from './src/screens/signin/signup';
import TabNavigation from './src/config/TabNavigation';
import StackNavigation from './src/config/StackNavigation';
import Navigation from './src/config/Navigation';
import store from './src/app/store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();


const App = ({ navigation }) => {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
