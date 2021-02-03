import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList, A, B } from 'types/RootStackParamList'

// import ChattingSvg from '../../assets/'

type Props = {
  route: A<RootStackParamList, 'Welcome'>; // eslint-disable-line
  navigation: B<RootStackParamList, 'Welcome'>; // eslint-disable-line
}

const Welcome = ({ navigation }: Props) => (
  <View style={page.view}>
    <Text style={page.text}>Seja bem-vindo</Text>
    {/* <ChattingSvg /> */}
    <Button title="Iniciar" onPress={() => navigation.navigate('Login')} />
  </View>
)

const page = StyleSheet.create({
  view: {
    position: 'relative',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0
  },
  text: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    color: 'black',
    fontSize: 24
  }
})

export default Welcome
