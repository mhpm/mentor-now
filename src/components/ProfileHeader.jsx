import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { View, Image } from 'react-native'

const Header = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  background-color: #2c2c2c;
  padding-top: 120px;
`
const Border = styled(View)`
  padding: 0px;
  width: 130px;
  height: 130px;
  border-radius: 120px;
  border-width: 5px;
  border-color: white;
  position: relative;
  top: 20px;
  z-index: 1;
`

const Avatar = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  margin: 0px;
  padding: 0px;
`
const ProfileHeader = ({ name, picture }) => {
  return (
    <Header>
      <Text fontFamily="bold" fontSize="26px">
        {name}
      </Text>
      <Border>
        <Avatar source={{ uri: picture }} />
      </Border>
    </Header>
  )
}

export default React.memo(ProfileHeader)
