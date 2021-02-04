import React from 'react'

import { Button, Icon } from '@ui-kitten/components'
import { RenderProp } from '@ui-kitten/components/devsupport'
import { ImageProps, View, StyleSheet } from 'react-native'

type Props = {
  value?: string; // eslint-disable-line
  nameIcon?: string; // eslint-disable-line
  onPress(): void; // eslint-disable-line
  style?: {}; // eslint-disable-line
  size?: string
}

const LinkButton = ({
  value,
  nameIcon,
  onPress,
  style,
  size = 'medium',
}: Props) => {
  const IconLinkButton: RenderProp<Partial<ImageProps>> = props => (
    <Icon {...props} name={nameIcon} />
  )

  return (
    <View style={{ marginTop: 5, marginBottom: 5, ...style }}>
      {nameIcon ? (
        <Button
          style={{ ...component.button }}
          status="primary"
          onPress={onPress}
          accessoryLeft={IconLinkButton}
          appearance="ghost"
          size={size}
        >
          {value}
        </Button>
      ) : (
        <Button
          style={{ ...component.button }}
          status="primary"
          onPress={onPress}
          appearance="ghost"
          size={size}
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

export default LinkButton
