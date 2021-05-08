import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { TouchableHighlight, View } from 'react-native'
import LightTheme from '../theme/LightTheme'
import { space } from 'styled-system'

const { colors } = LightTheme

const BaseButton = styled(TouchableHighlight)`
  height: 50px;
  border-radius: 100px;
  margin-bottom: 7px;
  width: ${(props) => (props.fluid ? '100%' : '300px')};
  ${space}
`

const ButtonStyled = styled(View)`
  height: 50px;
  border-radius: 100px;
  align-items: center;
  padding-top: 14px;
  background-color: ${(props) => (props.variant ? props.variant : colors.dark)};
  width: 100%;
`

const Button = ({ variant, fluid, children, ...restProps }) => {
  return (
    <BaseButton fluid={fluid} activeOpacity={0.6} {...restProps}>
      <ButtonStyled variant={colors[variant]}>
        <Text fontSize="17px" fontFamily="bold">
          {children}
        </Text>
      </ButtonStyled>
    </BaseButton>
  )
}

export default Button
