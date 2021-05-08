import React from 'react'
import { fetchMentors } from '../../hooks/useMentors'
import { Container, Wrapper, MentorCard, Box, Text } from '../../components'
import { FlatList } from 'react-native'

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
        <FlatList
          style={{ width: 100 + '%' }}
          data={data}
          renderItem={({ item: mentor }) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              hearth={mentor.is_favorite}
            />
          )}
          contentContainerStyle={{ paddingBottom: 70 }}
          keyExtractor={(item) => item.cell}
        />
      </Wrapper>
    </Container>
  )
}

export default MentorsScreen
