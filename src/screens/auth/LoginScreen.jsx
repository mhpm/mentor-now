import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import logoImage from '../../../assets/logoW.png'
import { useDispatch, useSelector } from 'react-redux'
import { facebookSignIn } from '../../redux/auth/authActions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button, Container, Text, Wrapper, Box } from '../../components'

const Logo = styled(Image)`
  width: 200px;
  height: 50px;
  margin-bottom: 70px;
`

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { error } = useSelector((state) => state.auth)

  const signIn = () => dispatch(facebookSignIn)
  AsyncStorage.clear()

  return (
    <Container p={4}>
      <Wrapper>
        <Logo source={logoImage}></Logo>
        <Box mb={3}>
          <Text fontSize="14px" fontFamily="bold" color="error">
            {error}
          </Text>
        </Box>
        <Button fluid variant="blue" onPress={signIn}>
          Iniciar con Facebook
        </Button>
        <Button fluid onPress={() => navigation.navigate('SignIn')}>
          Iniciar con Email
        </Button>
        <Text fontFamily="light" mt={3} mb={5}>
          ¿Eres nuevo?{' '}
          <Text isLink onPress={() => navigation.navigate('SignUp')}>
            Registrate
          </Text>
        </Text>
        <Footer>
          <Text fontFamily="bold">MentorNow &reg; 2021</Text>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default LoginScreen
