import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'





function Login({ }) {
    const [text, settext] = useState("");
    const [loading, setloading] = useState(false);
    const [User, setUser] = useState({});

    const navigation = useNavigation()

    const movingscreen = () => {
        setloading(true)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": "sohaib@gmail.com",
            "password": 123456
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://restapi.adequateshop.com/api/authaccount/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                navigation.navigate("Home", result)
                setloading(false)
            })
            .catch(error => console.log('error', error), setloading(false));


    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.heading}> Sign In </Text>
                <Text style={styles.heading2}> Plz sign in to your account </Text>
            </View>
            <View style={styles.inputcontainer}>
                <TextInput
                    style={styles.input}
                    placeholder="User Name"
                    defaultValue={text}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Useless placeholder"
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.button} >

                <Button
                    title="Log in"
                    loading={loading}
                    loadingProps={{ size: 'small', color: 'white' }}
                    buttonStyle={{
                        backgroundColor: 'rgba(111, 202, 186, 1)',
                        borderRadius: 5,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 200,
                        marginVertical: 10,
                    }}
                    onPress={movingscreen}
                />

            </View>
            <Text style={{ padding: 10 }}> NO account First Registor <Text style={{ color: "red", }} onPress={() => navigation.navigate("Signup")}>Sign Up </Text>?</Text>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        width: "100%",
        padding: 20,
        borderRadius: 10,
        justifyContent: "center",

    },
    inputcontainer: {
        // backgroundColor:"red",
        padding: 20,
        height: 200,
        justifyContent: "center"
    },
    button: {
        padding: 20,
    },
    heading: {
        color: "black",
        fontSize: 30,
        fontWeight: "600"
    },
    heading2: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "600"
    },
    input: {
        marginTop: 30,
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10

    },


})
export default Login;
