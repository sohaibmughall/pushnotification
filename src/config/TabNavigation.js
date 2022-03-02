// import * as React from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home/Home';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Login from '../screens/signin/login';



// const Tab = createBottomTabNavigator();

// export default function TabNavigation() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ focused, color, size }) => {
//                         let iconName;

//                         if (route.name === 'Home') {
//                             iconName = focused
//                                 ? 'ios-information-circle'
//                                 : 'ios-information-circle-outline';
//                         } else if (route.name === 'Settings') {
//                             iconName = focused ? 'ios-list-box' : 'ios-list';
//                         }

//                         // You can return any component that you like here!
//                         return <Ionicons name={iconName} size={size} color={color} />;
//                     },
//                     tabBarActiveTintColor: 'tomato',
//                     tabBarInactiveTintColor: 'gray',
//                 })}
//             >
//                 <Tab.Screen name="Home" component={Home} />
//                 {/* <Tab.Screen name="Settings" component={Login} /> */}
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }