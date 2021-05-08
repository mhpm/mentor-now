import React from 'react'
import { fetchMentors } from '../../hooks/useMentors'
import { Container, MentorList, Wrapper, Box, Text } from '../../components'

const FavoritesScreen = () => {
  const { loading, data } = fetchMentors()

  return (
    <Container pt="12%" px="10px">
      <Box mb={10} p={10} bg="primary" width="100%" borderRadius={7}>
        <Text mx="auto" fontFamily="black">
          Mentores Favoritos
        </Text>
      </Box>
      <Wrapper mdCol={8} loading={loading}>
        <MentorList data={data || null} />
      </Wrapper>
    </Container>
  )
}

export default FavoritesScreen
