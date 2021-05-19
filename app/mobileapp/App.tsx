import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './Components/Views/Home';
import WordLearning from './Components/Views/WordLearning';

import * as ViewApp from './Components/Views/';



/*
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
*/
/*
function App() {
    return (
        <NavigationContainer>

            <Tab.Navigator initialRouteName="Learning" tabBarOptions={{
              showLabel: false,
              style : {
                position : 'absolute',
                bottom : 24,
                left : 20,
                right : 20,
                backgroundColor : '#ffffff',
                borderRadius: 15, 
                height : 90,
                ...styles.shadow
              }
            }}>
                <Tab.Screen name="Home" component={ViewApp.HomeView} options={{
                  tabBarIcon: ({focused}) => ( 
                    <View style={{alignItems : 'center', justifyContent : 'center'}}>
                      <Image
                        source={require('./asset/icon/home.png')}
                        resizeMode='contain'
                        style={{
                          width: 25,
                          height: 25,
                          tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                      />
                      <Text
                        style={{color : focused ? '#e32f45' : '#748c94'}}
                      >HOME</Text>
                    </View>
                  )
                }}/>
                <Tab.Screen name="Home2" component={ViewApp.HomeView} options={{
                  tabBarIcon: ({focused}) => ( 
                    <View style={{alignItems : 'center', justifyContent : 'center'}}>
                      <Image
                        source={require('./asset/icon/home.png')}
                        resizeMode='contain'
                        style={{
                          width: 25,
                          height: 25,
                          tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                      />
                      <Text
                        style={{color : focused ? '#e32f45' : '#748c94'}}
                      >HOME2</Text>
                    </View>
                  )
                }}/>
                <Tab.Screen name="Learning" component={ViewApp.WordLearningView} options={{
                  tabBarIcon: ({focused}) => ( 
                    <View style={{alignItems : 'center', justifyContent : 'center'}}>
                      <Image
                        source={require('./asset/icon/home.png')}
                        resizeMode='contain'
                        style={{
                          width: 25,
                          height: 25,
                          tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                      />
                      <Text
                        style={{color : focused ? '#e32f45' : '#748c94'}}
                      >LEARNING</Text>
                    </View>
                  )
                }}/>
                <Tab.Screen name='Test' component={ViewApp.TestView} />
            </Tab.Navigator>
            
        </NavigationContainer>
    );
}
*/


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => { 
  return (
  <Tab.Navigator>
    <Tab.Screen name='Home' component={ViewApp.HomeView} />
    <Tab.Screen name='WordLearning' component={ViewApp.WordLearningView} />
  </Tab.Navigator>
  )};
 
const AuthStack = () => {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Tabs" component={MyTabs} />
    </Stack.Navigator>
    );
};

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({ 
  shadow: {
     shadowColor : '#7F5DF0',
     shadowOffset: { 
       width : 0,
       height : 10
     },
     shadowOpacity: 0.25,
     shadowRadius: 3.5,
     elevation: 5
  }
});

export default App;