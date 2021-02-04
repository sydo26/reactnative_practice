import React, { useState } from 'react'

import { Input, Icon } from '@ui-kitten/components'
import { RenderProp } from '@ui-kitten/components/devsupport'
import { ImageProps, TouchableWithoutFeedback } from 'react-native'

const AlertIcon: RenderProp<Partial<ImageProps>> = props => (
  <Icon {...props} name="alert-circle-outline" />
)

interface Props {
  label: string; // eslint-disable-line
  placeholder?: string; // eslint-disable-line
  caption?: string; // eslint-disable-line
  initValue?: string; // eslint-disable-line
  changeValue(value: string): void; // eslint-disable-line
}

const PasswordInput = ({
  label,
  placeholder = '',
  caption = '',
  changeValue,
  initValue = '',
}: Props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  const renderIcon: RenderProp<Partial<ImageProps>> = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  return caption ? (
    <Input
      style={{ marginTop: 5, marginBottom: 5 }}
      value={initValue}
      label={label}
      placeholder={placeholder}
      caption={caption}
      accessoryRight={renderIcon}
      captionIcon={AlertIcon}
      size="large"
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => changeValue(nextValue)}
    />
  ) : (
    <Input
      style={{ marginTop: 5, marginBottom: 5 }}
      value={initValue}
      label={label}
      placeholder={placeholder}
      accessoryRight={renderIcon}
      size="large"
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => changeValue(nextValue)}
    />
  )
}

export default PasswordInput
