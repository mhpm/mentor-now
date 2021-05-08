import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, ImageBackground } from 'react-native'
import { space, color } from 'styled-system'
import { FontAwesome } from '@expo/vector-icons'
import Image from '../../assets/bg.jpg'
import styled from 'styled-components'
import theme from '../theme/LightTheme'

const ContainerStyled = styled(View)`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const Background = styled(ImageBackground)`
  ${space}
  ${color}
  flex: 1;
  width: 100%;
`

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 25px;
  top: 50px;
  z-index: 99;
  padding: 10px;
`

const Container = (props) => {
  const navigation = useNavigation()
  const { children, loading, icon, ...rest } = props

  return (
    <ContainerStyled>
      <Background {...rest} source={props.bg ? null : Image}>
        {icon && (
          <BackButton onPress={() => navigation.goBack()}>
            <FontAwesome
              name="arrow-left"
              size={32}
              color={theme.colors.primary}
            />
          </BackButton>
        )}
        {children}
      </Background>
    </ContainerStyled>
  )
}

export default Container
