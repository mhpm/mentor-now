import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable, View, Image } from 'react-native'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import Rating from './Rating'
import Text from './Text'

const Container = styled(Pressable)`
  flex-direction: row;
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 5px;
  background-color: #2c2c2c;
`

const LeftColumn = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
`

const Column = styled(View)`
  padding: 10px;
  width: 55%;
`

const RightColumn = styled(View)`
  flex: auto;
  justify-content: center;
  align-items: center;
`

const Avatar = styled(Image)`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`

const MentorCard = ({ mentor, hearth }) => {
  const navigation = useNavigation()
  const {
    first_name,
    last_name,
    profile: { image },
    stars,
    comments,
  } = mentor

  const goProfile = () => {
    navigation.navigate('MentorProfile', {
      info: {
        first_name,
        last_name,
        image:
          'http://45.55.110.117/mentornow-api/api/public/images/users/user@user.com/yo.jpg',
        stars,
      },
    })
  }

  return (
    <Container onPress={goProfile}>
      <LeftColumn>
        <Avatar
          source={{
            uri:
              'http://45.55.110.117/mentornow-api/api/public/images/users/user@user.com/yo.jpg',
          }}
        />
      </LeftColumn>
      <Column>
        <Text fontFamily="bold">{first_name + ' ' + last_name}</Text>
        <Text fontFamily="light" fontSize="14px">
          Software Engineere
        </Text>
        <Text fontFamily="light" fontSize="14px">
          Mentorias impartidas: {comments}
        </Text>
        <Rating primary value={stars} />
      </Column>
      <RightColumn>
        {hearth && (
          <AntDesign
            name="heart"
            size={28}
            color="white"
            style={{ paddingRight: 20 }}
          />
        )}
      </RightColumn>
    </Container>
  )
}

export default React.memo(MentorCard)
