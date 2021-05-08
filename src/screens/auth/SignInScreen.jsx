import React, { useEffect } from 'react'
import { Container, SignInForm } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignInScreen = () => {
  useEffect(() => {
    AsyncStorage.clear()
  }, [])
  return (
    <Container bg="dark" p={3} icon>
      <SignInForm />
    </Container>
  )
}

export default SignInScreen
