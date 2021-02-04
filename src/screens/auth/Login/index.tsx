import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { RootStackParamList, A, B } from 'types/RootStackParamList'

import { PasswordInput, UsernameInput } from 'components/Inputs'
import { SubmitButton, LinkButton } from 'components/Buttons'

import EnteringSvg from 'assets/entering.svg'

type Props = {
  route: A<RootStackParamList, 'Login'>; // eslint-disable-line
  navigation: B<RootStackParamList, 'Login'>; // eslint-disable-line
}

const Login = ({ navigation }: Props) => {
  const [passwordValue, setPasswordValue] = useState('')
  const [usernameValue, setUsernameValue] = useState('')

  return (
    <View style={page.view}>
      <EnteringSvg style={page.enteringSvg} />
      <View style={page.form}>
        <UsernameInput
          label="Usuário ou E-mail"
          changeValue={v => setUsernameValue(v)}
          initValue={usernameValue}
          placeholder="Digite seu usuário"
        />
        <PasswordInput
          label="Senha"
          placeholder="Digite sua senha de usuário"
          changeValue={v => setPasswordValue(v)}
          initValue={passwordValue}
        />
        <SubmitButton
          isReadySubmit={true}
          value="Entre agora mesmo"
          nameIcon="navigation-2-outline"
          onPress={() => null}
        />
        <LinkButton
          onPress={() => navigation.navigate('Register')}
          value="Não é cadastrado? Cadastre-se agora"
        />
        <LinkButton onPress={() => null} value="Esqueci minha senha" />
      </View>
    </View>
  )
}

const page = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  form: {
    position: 'relative',
    width: '100%',
    maxWidth: 420,
    minWidth: 280,
    height: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
  },
  enteringSvg: {
    position: 'relative',
    width: '100%',
    height: '100%',
    maxHeight: 180,
    maxWidth: 180,
    marginBottom: 10,
    marginTop: 10,
  },
})

export default Login
