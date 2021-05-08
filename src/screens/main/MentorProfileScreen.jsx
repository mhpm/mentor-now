import React from 'react'
import {
  Container,
  Button,
  Text,
  Wrapper,
  TopicCard,
  Rating,
  Box,
  ProfileHeader,
} from '../../components/'
import { ScrollView } from 'react-native'

const topics = [
  {
    _id: '0',
    topic: 'matemáticas',
    mentores: 11,
  },
  {
    _id: '1',
    topic: 'ciencias',
    mentores: 30,
  },
  {
    _id: '2',
    topic: 'progración',
    mentores: 50,
  },
]

const MentorProfileScreen = ({ route }) => {
  const { info } = route.params
  const { name, picture, rating } = info

  return (
    <Container icon>
      <Wrapper mdCol={12}>
        <ScrollView
          style={{ marginBottom: 10, width: '100%', flex: 1 }}
          contentContainerStyle={{ paddingBottom: 100 + '%' }}
        >
          <ProfileHeader
            name={`${name.first} ${name.last}`}
            picture={picture.large}
          />
          <Wrapper p={3} mdCol={6} mt="110px">
            <Text fontFamily="black">Senior Software Developer</Text>
            <Text fontFamily="light">Inivercidad Autonoma de Mexíco</Text>
            <Text fontFamily="light">
              Mentorias impartidas: {Math.floor(rating * 4)}
            </Text>
            <Rating primary value={rating} />
            <Button fluid style={{ marginTop: 20 }} variant="primary">
              AGENDAR
            </Button>

            <Box bg="dark" width="100%" py={2} mb={2} mt={3}>
              <Text fontSize="18px" mx="auto" fontFamily="bold">
                CURRICULUM
              </Text>
            </Box>
            <Text style={{ textAlign: 'justify' }} fontFamily="light">
              Lorem Ipsum is simply dummy text of the printing and typ esetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typeset ting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus Page Maker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typ esetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book.
            </Text>
            <Box bg="dark" width="100%" py={2} mb={2} mt={3}>
              <Text fontSize="18px" mx="auto" fontFamily="bold">
                TOPICOS QUE IMPARTE
              </Text>
            </Box>
            {topics.map((item) => (
              <TopicCard key={item._id} item={item} />
            ))}
          </Wrapper>
        </ScrollView>
      </Wrapper>
    </Container>
  )
}

export default MentorProfileScreen
