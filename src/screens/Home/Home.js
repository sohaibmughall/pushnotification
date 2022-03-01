//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements'

// create a component
const Home = () => {
    return (
        <>
            <View style={styles.header}>
                <Avatar
                    size={64}
                    rounded
                    source={{ uri: "https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg" }}
                    containerStyle={{ backgroundColor: '#00a7f7' }}
                />
                <View>
                    <Text>Sohaib Ahmed</Text>
                    <Text>Software Eng.</Text>
                </View>
                <View style={styles.line2}></View>
            </View>
            <View style={styles.line}></View>
            <ScrollView>
                <View style={styles.mid}>
                    <Text>Home</Text>
                </View>
            </ScrollView>
        </>

    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
        flex: 0.5,
        justifyContent: "space-around",
        alignItems: "center",
        color: "#2c3e50",
        backgroundColor: "#a4c936",
        width: "100%",
        flexDirection: "row",
        borderBottomEndRadius: 100,
        // borderBottomStartRadius:10
    },
    line: {
        // flex:0.1,
        height: 35,
        marginTop: -60,
        width: "100%",
        backgroundColor: "white",
    },
    line2: {
        height: 260,
        marginTop: -70,
        width: "10%",
        backgroundColor: "white",
        borderRadius: 20,
    },
    mid: {
        marginTop: 40,
        flex: 2,
    }
});

//make this component available to the app
export default Home;
