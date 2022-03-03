import React from 'react';
import { View, ScrollView, StyleSheet, } from 'react-native';
import { Text, Card, Button, Icon, Image, } from 'react-native-elements';

const Cards = ({ data }) => {
    return (
        <>
            <View style={{ padding: 10, flex: 1 }}>
                <View style={styles.container}>
                    {data.data.map(item => {
                        return (
                            
                            <View style={styles.card}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.tourist_profilepicture }}

                                />
                                <Text style={styles.name}> {item.tourist_name}</Text>
                                <Text style={styles.fonts}> {item.tourist_email}</Text>
                                <Text style={styles.fonts}> <Icon
                                    name="location"
                                    type="material"
                                    size={12}
                                    color="red"

                                /> {item.tourist_location}</Text>

                            </View>
                        )

                    })}
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        // justifyContent: "center",
        flexDirection: "row",
        marginTop: 8,
        backgroundColor: "aliceblue",
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 150,
        height: 140,
        shadowColor: "#000",
        borderRadius: 10,

    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
    card: {
        width: 160,
        margin: 5,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding: 5


    }
});

export default Cards;