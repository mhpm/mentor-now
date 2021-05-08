import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { View, SafeAreaView } from 'react-native'
import Container from '../../components/Container'
import { ProfileHeader, Text, Box } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../redux/auth/authActions'

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  margin-top: 0;
  padding-bottom: 90px;
`

const Footer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  width: 100%;
`

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  return (
    <Container>
      <Wrapper>
        <ProfileHeader
          name={user.first_name + ' ' + user.last_name}
          picture={user.picture}
        />
        <Box mt="120px">
          <Text fontFamily="light" mx="auto">
            {user.email}
          </Text>
        </Box>
        <Footer>
          <Text fontFamily="bold" onPress={() => dispatch(signOut)}>
            Cerrar Sesión
          </Text>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default ProfileScreen
