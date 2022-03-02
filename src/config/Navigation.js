import React from 'react';
import { View, StyleSheet } from 'react-native';
import DrawerNavigation from './DrawerNavigation';
import StackNavigation from './StackNavigation';

const Navigation = () => {
    return (
        <>
            <StackNavigation />
            {/* <DrawerNavigation /> */}
        </>
    );
}

const styles = StyleSheet.create({})

export default Navigation;
