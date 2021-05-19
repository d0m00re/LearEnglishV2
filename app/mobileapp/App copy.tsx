import React from 'react';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Components/Views/Home';
import WordLearning from './Components/Views/WordLearning';

import * as ViewApp from './Components/Views/';

/*
function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Text> Home Screen </Text>
        </View>
    );
}
*/

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={ViewApp.HomeView} options={{title : 'Overview', headerStyle : {backgroundColor : '#fc00151'}, headerTintColor : '#fff', headerTitleStyle : {fontWeight : 'bold'} }} />
                <Stack.Screen name="Learn English Word" component={ViewApp.WordLearningView} />
                <Stack.Screen name='Test'
                              component={ViewApp.TestView}
                              initialParams={{count : 42}}
                              />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;