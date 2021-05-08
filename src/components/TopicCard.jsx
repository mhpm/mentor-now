import React, { useCallback, useEffect, useState } from 'react'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components'
import Text from './Text'

const Container = styled(Pressable)`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  padding-left: 25px;
  padding-top: 45px;
  padding-bottom: 45px;
  margin-bottom: 5px;
  background-color: #2c2c2c;
`

const Title = styled(Text)`
  text-transform: capitalize;
`

const TopicCard = ({ item }) => {
  const navigation = useNavigation()
  const [rating, setRating] = useState(0)
  const { _id, topic, mentores } = item

  const getRanting = useCallback(() => {
    let random = Math.random() * 5 + 1
    setRating(random)
  }, [rating])

  useEffect(() => {
    getRanting()
  }, [])

  const goProfile = () => {
    //navigation.navigate('MentorProfile', { topic: { _id } })
  }

  return (
    <Container onPress={goProfile}>
      <Title fontFamily="bold" fontSize="28px" color="primary">
        {topic}
      </Title>
      <Text fontFamily="light" fontSize="14px">
        {mentores} Mentores
      </Text>
    </Container>
  )
}

export default React.memo(TopicCard)
