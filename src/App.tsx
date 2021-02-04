import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import LoginScreen from 'screens/auth/Login'
import RegisterScreen from 'screens/auth/Register'
import WelcomeScreen from 'screens/Welcome'

const { Navigator, Screen } = createStackNavigator()

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Navigator initialRouteName="Welcome">
            <Screen
              options={{ headerShown: false }}
              name="Welcome"
              component={WelcomeScreen}
            />
            <Screen
              options={{ headerTitleAlign: 'center', headerTransparent: true }}
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
      </ApplicationProvider>
    </>
  )
}
