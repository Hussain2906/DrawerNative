import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from './src/Views/HomeScreen'
import ProfileScreen from './src/Views/ProfileScreen'
import OptionScreen from './src/Views/OptionScreen'




const MainStack = ()=>{
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator>
        <Stack.Screen name='DrawerNav' component={DrawerNav}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
        <Stack.Screen name='OptionScreen' component={OptionScreen}/>
      </Stack.Navigator>
    )
  }

export default MainStack

const styles = StyleSheet.create({})