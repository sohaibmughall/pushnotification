import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    render() {
        return (
            <>
                <View style={styles.container}>
                    <Text style={styles.heading}> Sign In </Text>
                    <Text style={styles.heading2}> Plz sign in to your account </Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="User Name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                </View>
                <Button title="Learn More"
                    color="#a4c936"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() => this.props.navigation.navigate('Home')}
                />

            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // backgroundColor: "#f99855",
        padding: 20,
        borderRadius: 10
    },
    heading: {

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
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10

    },


})
export default Login;
