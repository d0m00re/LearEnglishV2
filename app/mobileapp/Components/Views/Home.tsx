import React from 'react';

import { Text, StyleSheet, Button, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

interface Props {
    navigation : any;
}

function Home({ navigation }: Props) {
    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        marginVertical: 8
    },
    buttonTest: {
        color: 'red'
    },
    fixToText: {
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Home;