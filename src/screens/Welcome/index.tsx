import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
// import {} from 'galio-framework'

import { RootStackParamList, A, B } from 'types/RootStackParamList'

import ChattingSvg from '../../assets/chatting.svg'

type Props = {
  route: A<RootStackParamList, 'Welcome'>; // eslint-disable-line
  navigation: B<RootStackParamList, 'Welcome'>; // eslint-disable-line
}

const Welcome = ({ navigation }: Props) => (
  <View style={page.background}>
    <ChattingSvg style={page.chattingSvg} />
    <Text style={page.title}>Seja bem-vindo(a)</Text>
    <Text style={page.subtitle}>
      Venha participar de conversas privadas agora mesmo!
    </Text>
    <Button
      color="orange"
      title="Comece agora"
      onPress={() => navigation.navigate('Login')}
    />
  </View>
)

const page = StyleSheet.create({
  chattingSvg: {
    width: '100%',
    height: 220,
    margin: 'auto',
    marginTop: 100,
  },
  title: {
    fontSize: 28,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    marginTop: 10,
    color: 'rgb(71,71,71)',
  },
  background: {
    position: 'relative',
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  button: {
    position: 'relative',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
})

export default Welcome
