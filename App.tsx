import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from 'screens/auth/Login'
import RegisterScreen from 'screens/auth/Register'
import WelcomeScreen from 'screens/Welcome'

const { Navigator, Screen } = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Welcome">
        <Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterScreen}
        />
      </Navigator>
    </NavigationContainer>
  )
}
