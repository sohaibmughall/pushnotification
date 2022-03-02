//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Avatar, Image } from 'react-native-elements'
import Cards from '../../components/Cards';

// create a component
const Home = () => {
    return (
        <>
            <ImageBackground
                source={require('../../assets/images/app-bg.png')}
                style={{ width: "100%", height: 180, justifyContent: "center" }}
            >
                <View style={styles.header}>
                    <Avatar
                        size={100}
                        rounded
                        source={{ uri: "https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg" }}
                        containerStyle={{ backgroundColor: '#00a7f7' }}
                    />
                    <View>
                        <Text> Sohaib Ahmed</Text>
                        <Text> Software Eng.</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.line}></View>
            <ScrollView>
                    <Cards></Cards>
               

            </ScrollView>
    
        </>

    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
        // flex: 0.5,
        justifyContent: "flex-start",
        alignItems: "center",
        color: "#2c3e50", width: "100%",
        borderBottomEndRadius: 100,
        // borderBottomStartRadius:10
        flexDirection: "row"
    },

});

//make this component available to the app
export default Home;
