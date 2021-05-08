import React from 'react'
import MentorCard from './MentorCard'
import { FlatList } from 'react-native'

const MentorList = ({ data }) => {
  return (
    <FlatList
      style={{ width: 100 + '%' }}
      data={data}
      renderItem={({ item: mentor }) =>
        mentor.is_favorite && (
          <MentorCard
            key={mentor.id}
            mentor={mentor}
            hearth={mentor.is_favorite}
          />
        )
      }
      contentContainerStyle={{ paddingBottom: 70 }}
      keyExtractor={(item) => item.cell}
    />
  )
}

export default MentorList
