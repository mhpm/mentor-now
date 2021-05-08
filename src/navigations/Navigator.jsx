import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import { Keyboard } from 'react-native'
import theme from '../theme/LightTheme'

// Auth Screens
import LoginScreen from '../screens/auth/LoginScreen'
import SignInScreen from '../screens/auth/SignInScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'
import RecoveryScreen from '../screens/auth/RecoveryScreen'

// Main Screens
import HomeScreen from '../screens/main/HomeScreen'
import CatalogScreen from '../screens/main/CatalogScreen'
import MentorsScreen from '../screens/main/MentorsScreen'
import ProfileScreen from '../screens/main/ProfileScreen'
import FavoritesScreen from '../screens/main/FavoritesScreen'

// Modals Screens
import MentorProfileScreen from '../screens/main/MentorProfileScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Auth() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Recovery" component={RecoveryScreen} />
    </Stack.Navigator>
  )
}

function Main() {
  const [keyboar, setKeyboar] = useState(false)

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide)

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide)
    }
  }, [])

  const _keyboardDidShow = () => {
    console.log('====================================')
    console.log('Keyboard Shown')
    console.log('====================================')
    setKeyboar(true)
  }

  const _keyboardDidHide = () => {
    console.log('====================================')
    console.log('Keyboard Hidden')
    console.log('====================================')
    setKeyboar(false)
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName
          let iconColor = focused
            ? theme.colors.primary
            : theme.colors.secondary

          if (route.name === 'Home') {
            iconName = 'home'
          }
          if (route.name === 'Catalog') {
            iconName = 'book'
          }
          if (route.name === 'Mentors') {
            iconName = 'user-tie'
          }
          if (route.name === 'Favorites') {
            iconName = 'heart'
          }
          if (route.name === 'Profile') {
            iconName = 'user-alt'
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={28} color={iconColor} />
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopWidth: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Mentors" component={MentorsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        options={{
          tabBarVisible: false,
          // option for hide tab bottom
          tabBarButton: () => null,
        }}
        name="MentorProfile"
        component={MentorProfileScreen}
      />
    </Tab.Navigator>
  )
}

function RootNavigator() {
  const { token } = useSelector((state) => state.auth)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        headerMode="none"
        animation="fade"
      >
        {token == null ? (
          <Stack.Screen name="Auth" component={Auth} />
        ) : (
          <Stack.Screen name="Main" component={Main} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
