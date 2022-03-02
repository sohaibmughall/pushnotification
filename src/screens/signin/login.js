import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'




function Login({ navigation }) {
    const [text, settext] = useState("");
    const [loading, setloading] = useState(false);

    const movingscreen = () => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
            navigation.navigate("Home")
        }, 3000);
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
        marginTop:70,
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
