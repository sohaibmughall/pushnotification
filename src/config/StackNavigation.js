import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Avatar, Image } from 'react-native-elements';
import Login from '../screens/signin/login';
import Signup from '../screens/signin/signup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false,


                }}>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === 'Home') {
                                    iconName = focused
                                        ? 'ios-information-circle'
                                        : 'ios-information-circle-outline';
                                } else if (route.name === 'Settings') {
                                    iconName = focused ? 'ios-list-box' : 'ios-list';
                                }

                                // You can return any component that you like here!
                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                            tabBarActiveTintColor: 'tomato',
                            tabBarInactiveTintColor: 'gray',
                        })}
                    >
                        <Tab.Screen name="Home" component={Home} />
                        {/* <Tab.Screen name="Settings" component={Login} /> */}
                    </Tab.Navigator>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default StackNavigation;
