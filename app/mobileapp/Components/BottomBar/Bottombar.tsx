import React from 'react';

import { Text, StyleSheet, Button, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import * as view from './../Views/';

const Tab = createBottomTabNavigator();

interface Props {

}

function Bottombar({ }: Props) {

    return (
        <Tab.Navigator>

        </Tab.Navigator>
    )
};

export default Bottombar;