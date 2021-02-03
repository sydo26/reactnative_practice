import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList, A, B } from 'types/RootStackParamList'

type Props = {
  route: A<RootStackParamList, 'Register'>; // eslint-disable-line
  navigation: B<RootStackParamList, 'Register'>; // eslint-disable-line
}

const Register = ({ navigation }: Props) => (
  <View style={page.view}>
    <Text style={page.text}>Tela de Cadastro</Text>
    <Button title="Vá Logar" onPress={() => navigation.navigate('Login')} />
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

export default Register
