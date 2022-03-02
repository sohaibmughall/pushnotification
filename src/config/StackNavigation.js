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


    const AuthContext = React.createContext();

    const authContext = React.useMemo(
        () => ({
            signIn: async data => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `SecureStore`
                // In the example, we'll use a dummy token

                console.log(data);
            },
            // signOut: () => dispatch({ type: 'SIGN_OUT' }),
            // signUp: async data => {
            //     // In a production app, we need to send user data to server and get a token
            //     // We will also need to handle errors if sign up failed
            //     // After getting token, we need to persist the token using `SecureStore`
            //     // In the example, we'll use a dummy token

            //     dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            // },
        }),
        []
    );

    return (
        <NavigationContainer>
            <AuthContext.Provider value={authContext}>


                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name="Home" component={Home} options={{
                        headerShown: false,
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
            </AuthContext.Provider>
        </NavigationContainer>

    );
};

export default StackNavigation;
