import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './Appnavigator';
const stack=createNativeStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
        <AppNavigator />
      {/* <stack.Navigator>
        <stack.Screen name='Home' component={Home} />
      </stack.Navigator> */}
    </NavigationContainer>
  )
}

export default Main