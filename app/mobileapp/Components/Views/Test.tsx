import React from 'react';

import { Text, StyleSheet, Button, View } from 'react-native';

interface Props {
    navigation : any;
    count : number;
}

function Test({ navigation, count }: Props) {
    return (
        <View>
            <Text>
                count = {count}
            </Text>

            <Button color='red' title='Incr' onPress={() => navigation.setParams({count : count + 1})} />

           <Button title="Reload" onPress={() => navigation.push('Test')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button title="Go Home" onPress={() => navigation.navigate('Home')} />

        </View>
    )
};

export default Test;