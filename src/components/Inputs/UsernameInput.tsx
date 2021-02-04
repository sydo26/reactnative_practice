import React from 'react'

import { Icon, Input } from '@ui-kitten/components'
import { RenderProp } from '@ui-kitten/components/devsupport'
import { ImageProps } from 'react-native'

const UserIcon: RenderProp<Partial<ImageProps>> = props => (
  <Icon {...props} name="person-outline" />
)

interface Props {
  label: string; // eslint-disable-line
  placeholder?: string; // eslint-disable-line
  initValue?: string; // eslint-disable-line
  changeValue(value: string): void; // eslint-disable-line
}

const UsernameInput = ({
  label,
  placeholder = '',
  changeValue,
  initValue = '',
}: Props) => {
  return (
    <>
      <Input
        style={{ marginTop: 5, marginBottom: 5 }}
        value={initValue}
        label={label}
        placeholder={placeholder}
        size="large"
        onChangeText={nextValue => changeValue(nextValue)}
      />
    </>
  )
}

export default UsernameInput
