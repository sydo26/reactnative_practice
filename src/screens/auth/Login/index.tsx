import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList, A, B } from 'types/RootStackParamList'

type Props = {
  route: A<RootStackParamList, 'Login'>; // eslint-disable-line
  navigation: B<RootStackParamList, 'Login'>; // eslint-disable-line
}

const Login = ({ navigation }: Props) => (
  <View style={page.view}>
    <Text style={page.text}>Tela de Login</Text>
    <Button
      title="Venha se cadastrar"
      onPress={() => navigation.navigate('Register')}
    />
  </View>
)

const page = StyleSheet.create({
  view: {
    position: 'relative',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
  text: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
  },
})

export default Login
