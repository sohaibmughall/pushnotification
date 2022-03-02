import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Avatar, Image } from 'react-native-elements';
import Login from '../screens/signin/login';
import Signup from '../screens/signin/signup';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();


const StackNavigation = ({ route }) => {

    // use effect function --------------------------------------------------------------  


    return (
        <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name="Home" component={Home} options={{
                        headerShown: true,
                        headerTitle: props => <Image
                            source={require('../assets/images/w_insta.png')}
                            style={{ width: 150, height: 40 }}
                        />,
                        headerRight: () => (
                            <Image
                                source={require('../assets/images/insta_icon.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        ),
                    }}></Stack.Screen>
                </Stack.Navigator>
        </NavigationContainer>

    );
};

export default StackNavigation;
