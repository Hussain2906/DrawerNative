import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import HomeScreen from '../Views/HomeScreen';
import ProfileScreen from '../Views/ProfileScreen';
import Notification from '../Views/Notification';
import OptionScreen from '../Views/OptionScreen';
import {Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';

// Stack Navigation inside Tabs
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Settings"
        component={OptionScreen}
        options={{
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold', fontSize: 18},
        }}
      />
      <HomeStack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

// Bottom Tab Navigation
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'profile';
          } else if (route.name === 'Options') {
            iconName = 'switcher';
          }
          return (
            <>
              <Icon name={iconName} size={size} color={color} />
            </>
          );
        },
        tabBarActiveTintColor: '#0E2F44',
        tabBarActiveBackgroundColor: '#6897BB',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Options"
        component={OptionScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

// Drawer Navigation
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  const navigation = useNavigation(); // Using useNavigation hook to get navigation prop

  return (
    <Drawer.Navigator
  screenOptions={{
    // Drawer Styles
    drawerStyle: { backgroundColor: '#fff', width: 250 },
    drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
    drawerActiveTintColor: '#694fad',
    drawerInactiveTintColor: '#aaa',
    
    // Common Header Styles for All Drawer Screens
    headerStyle: { backgroundColor: 'white' },
    headerTintColor: '#0E2F44',
    headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
    headerTitle: () => (
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 100, height: 35, marginLeft: -15, marginTop: 4 }}
      />
    ),
    headerRight: ({ navigation }) => (
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <Feather
          name="bell"
          size={20}
          color="black"
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
    ),
  }}
>
  <Drawer.Screen name="Home" component={TabNavigator} />
  <Drawer.Screen name="Settings" component={OptionScreen} />
  <Drawer.Screen name="Profile" component={ProfileScreen} />
</Drawer.Navigator>

  );
}

// Main Navigation Component
export default function MainNavigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
