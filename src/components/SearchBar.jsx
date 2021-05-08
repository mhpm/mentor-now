import React, { useState } from 'react'
import styled from 'styled-components'
import { Keyboard } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Box from './Box'
import Input from './Input'
import Button from './Button'

const Icon = styled(FontAwesome5)`
  position: absolute;
  right: 15px;
  top: 18px;
  z-index: 9;
  color: #575757;
  height: 100%;
  width: 30px;
`

const SearchBar = (props) => {
  const [text, setText] = useState('')
  const { children, ...rest } = props

  const handleClear = () => {
    Keyboard.dismiss()
    setText('')
  }

  return (
    <Box {...rest}>
      {text.length > 0 ? (
        <Icon onPress={handleClear} name="times" size={24} />
      ) : (
        <Icon name="search" size={24} />
      )}
      <Input
        placeholder="Buscar..."
        onChangeText={(text) => setText(text)}
        value={text}
        borderRadius="100px"
      />
      {text.length > 2 && (
        <Button fluid variant="primary">
          BUSCAR
        </Button>
      )}
    </Box>
  )
}

export default SearchBar
