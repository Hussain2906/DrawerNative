import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/Views/HomeScreen'
import ProfileScreen from './src/Views/ProfileScreen'
import OptionScreen from './src/Views/OptionScreen'




const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      screenOptions={{
        drawerStyle:{
          backgroundColor:"#e6e6e6",
          width:240,
        },
        drawerLabelStyle:{
          fontSize:18,
          color:"black"
        },
        headerStyle:{
          backgroundColor:"#6200EE"
        },
        headerTintColor:'#fff',
        headerTitleAlign:"center"
      }}
       >
       <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="OptionScreen" component={OptionScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})