import React, { useEffect } from 'react'
import { Container, Wrapper, SignUpForm } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignUpScreen = () => {
  useEffect(() => {
    AsyncStorage.clear()
  }, [])
  return (
    <Container bg="dark" p={3} icon>
      <SignUpForm />
    </Container>
  )
}

export default SignUpScreen
