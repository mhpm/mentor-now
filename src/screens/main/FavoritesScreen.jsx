import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Container, MentorCard, Wrapper } from '../../components'
import { FlatList } from 'react-native'

const FavoritesScreen = () => {
  const { loading, data } = useFetch('https://randomuser.me/api/?results=5')
  return (
    <Container p="10px">
      <Wrapper loading={loading} mt="10%">
        <FlatList
          style={{ width: 100 + '%' }}
          data={data.results}
          renderItem={(item) => (
            <MentorCard key={item.cell} item={item.item} hearth />
          )}
          contentContainerStyle={{ paddingBottom: 70 }}
          keyExtractor={(item) => item.cell}
        />
      </Wrapper>
    </Container>
  )
}

export default FavoritesScreen
