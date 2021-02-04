import React from 'react'

import { Button, Icon } from '@ui-kitten/components'
import { RenderProp } from '@ui-kitten/components/devsupport'
import { ImageProps, View, StyleSheet } from 'react-native'

type Props = {
  value?: string; // eslint-disable-line
  nameIcon?: string; // eslint-disable-line
  onPress(): void; // eslint-disable-line
  style?: {}; // eslint-disable-line
  isReadySubmit?: boolean
}

const SubmitButton = ({
  value,
  nameIcon,
  style,
  isReadySubmit = true,
  onPress,
}: Props) => {
  const IconSubmitButton: RenderProp<Partial<ImageProps>> = props => (
    <Icon {...props} name={nameIcon} />
  )

  return (
    <View style={{ marginTop: 5, marginBottom: 5 }}>
      {nameIcon ? (
        <Button
          style={{ ...component.button, ...style }}
          status="primary"
          onPress={onPress}
          accessoryRight={IconSubmitButton}
          disabled={!isReadySubmit}
          size="large"
        >
          {value}
        </Button>
      ) : (
        <Button
          style={{ ...component.button, ...style }}
          status="primary"
          onPress={onPress}
          disabled={!isReadySubmit}
          size="large"
        >
          {value}
        </Button>
      )}
    </View>
  )
}

const component = StyleSheet.create({
  button: {},
})

export default SubmitButton
