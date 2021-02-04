import React from 'react'
import { Button, Text } from '@ui-kitten/components'
import { View, StyleSheet } from 'react-native'

import { RootStackParamList, A, B } from 'types/RootStackParamList'

import ChattingSvg from 'assets/chatting.svg'

import { LinkButton } from 'components/Buttons'

type Props = {
  route: A<RootStackParamList, 'Welcome'>; // eslint-disable-line
  navigation: B<RootStackParamList, 'Welcome'>; // eslint-disable-line
}

const Welcome = ({ navigation }: Props) => (
  <View style={page.background}>
    <ChattingSvg style={page.chattingSvg} />
    <View style={page.blocktext}>
      <Text category="h1" style={{ ...page.text, fontWeight: 'bold' }}>
        Seja bem-vindo(a)
      </Text>
      <Text
        category="h6"
        style={{ ...page.text, paddingLeft: 15, paddingRight: 15 }}
      >
        Venha participar de conversas privadas agora mesmo!
      </Text>
    </View>
    <LinkButton
      style={page.button}
      value="Começar agora"
      nameIcon="star-outline"
      onPress={() => navigation.navigate('Login')}
      size="giant"
    />
  </View>
)

const page = StyleSheet.create({
  chattingSvg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    maxHeight: 320,
    maxWidth: 320,
    minWidth: 280,
    minHeight: 280,
    top: 150,
  },
  text: {
    width: '100%',
    textAlign: 'center',
    marginTop: 10,
  },
  blocktext: {
    position: 'absolute',
    bottom: 200,
    width: '100%',
    height: 'auto',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
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
    position: 'absolute',
    bottom: 20,
    width: '90%',
    minWidth: 280,
  },
})

export default Welcome
