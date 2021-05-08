import React, { useState } from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import { FontAwesome5 } from '@expo/vector-icons'
import Box from './Box'
import Text from './Text'
import { space, color, fontSize, fontFamily, border } from 'styled-system'

const StyledInput = styled(TextInput)`
  position: relative;
  padding-left: 17px;
  padding-right: 17px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  background-color: #2c2c2c !important;
  color: #fff;
  font-size: 17px;
  min-height: 60px;
  width: 100%;
  ${space}
  ${color}
  ${fontSize}
  ${fontFamily}
  ${border}
`

const Icon = styled(FontAwesome5)`
  position: absolute;
  right: 25px;
  top: 18px;
  z-index: 9;
  height: 100%;
  width: 30px;
  ${color}
`

const Input = (props) => {
  const [toggle, setToggle] = useState(true)

  const getEyeIcon = () => (
    <Icon
      color="shade10"
      name={toggle ? 'eye-slash' : 'eye'}
      onPress={() => setToggle(!toggle)}
      size={24}
    />
  )

  const getIcon = () => <Icon name={props.icon} size={24} />

  return (
    <Box width="100%" mb={2}>
      <StyledInput
        fontFamily="bold"
        secureTextEntry={props.type === 'password' && toggle}
        placeholderTextColor="#999"
        {...props}
        borderRadius={props.borderRadius || '15px'}
      />
      {props.type === 'password' && getEyeIcon()}
      {props.type !== 'password' && props.icon && getIcon()}
      {props.textHelper && (
        <Text pl="2" color="error" fontFamily="bold" fontSize="12px">
          {props.textHelper}
        </Text>
      )}
    </Box>
  )
}

export default React.memo(Input)
