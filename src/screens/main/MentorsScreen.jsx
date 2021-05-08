import React from 'react'
import { fetchMentors } from '../../hooks/useMentors'
import { Container, Wrapper, Box, Text, MentorList } from '../../components'

const MentorsScreen = () => {
  const { loading, data } = fetchMentors()

  return (
    <Container pt="12%" px="10px">
      <Box mb={10} p={10} bg="primary" width="100%" borderRadius={7}>
        <Text mx="auto" fontFamily="black">
          Mentores Disponibles
        </Text>
      </Box>
      <Wrapper mdCol={8} loading={loading}>
        <MentorList data={data} />
      </Wrapper>
    </Container>
  )
}

export default MentorsScreen
