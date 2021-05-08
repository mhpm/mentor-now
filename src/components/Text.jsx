import React from 'react'
import styled from 'styled-components/native'
import { Text as Txt } from 'react-native'
import { fontSize, color, fontFamily, space, typography } from 'styled-system'

const TextStyled = styled(Txt)`
  ${fontFamily}
  ${color}
  ${fontSize}
  ${space}
  ${typography}
  text-decoration: ${(props) => (props.isLink ? 'underline' : 'none')};
`

const Text = (props) => {
  return (
    <TextStyled color="light" fontSize="18px" fontFamily="regular" {...props} />
  )
}

export default Text
