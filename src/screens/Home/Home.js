//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, } from 'react-native';
import { Avatar, Image, Button, ButtonGroup } from 'react-native-elements'
import { Hs1 } from '../../assets/colors/colors';
import Cards from '../../components/Cards';
import { Counter } from './../../features/counter/counter';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { useSelector } from 'react-redux';

// create a component
const Home = ({ route }) => {
    const [cards, setcards] = useState([]);
    const [pagecount, setpagecount] = useState(1)
    const [progress, setprogress] = useState(false)
    

    // use effect function --------------------------------------------------------------
    const { user } = useSelector(state => state.user)
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${user.payload.Token}`);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://restapi.adequateshop.com/api/Tourist?page=${pagecount}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setcards(result)
                // console.log(result);
                setprogress(false)
            })
            .catch(error => console.log('error', error));
    }, [progress])
    return (
        <>
            {
                progress ? <ProgressBar
                    styleAttr="Horizontal"
                    indeterminate={progress}
                    progress={1}
                /> : null
            }

            <ImageBackground
                source={require('../../assets/images/app-bg.png')}
                style={{ width: "100%", height: 180, justifyContent: "center" }}
            >
                <View style={styles.header} onMagicTap >
                    <Avatar
                        size={100}
                        rounded
                        source={{ uri: "https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg" }}
                        containerStyle={{ backgroundColor: '#00a7f7' }}
                    />
                    <View>
                        <Text style={Hs1}> {user.payload.Name}</Text>
                        <Text style={Hs1}> {user.payload.Email}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.line}></View>
            <ScrollView onScrollEndDrag={() => { setpagecount(pagecount + 1), setprogress(true) }} >
                <Cards data={cards} />
                {/* <Counter /> */}

                {/* <Button onPress={() => setpagecount(pagecount + 1)} title={"Load more"} /> */}
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
