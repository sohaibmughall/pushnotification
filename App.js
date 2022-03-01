import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/signin/login';
import Home from './src/screens/Home/Home';
import { Avatar } from 'react-native-elements';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Home" component={Home} options={{
          headerTitle: props => <Avatar
            size={34}
            // rounded
            containerStyle={{ backgroundColor: '#00a7f7' }}
          />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
