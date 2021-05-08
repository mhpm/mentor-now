import React from 'react'
import styled from 'styled-components'
import { FontAwesome } from '@expo/vector-icons'
import { View } from 'react-native'
import theme from '../theme/LightTheme'

const StarsContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 5px;
`

const Rating = ({ value, primary, color = 'white' }) => {
  function getStar(index) {
    return (
      <FontAwesome
        key={index}
        size={16}
        style={{ marginRight: 2 }}
        color={primary ? theme.colors.primary : color}
        name={
          value >= 1 + index
            ? 'star'
            : value >= index + 0.5
            ? 'star-half-empty'
            : 'star-o'
        }
      />
    )
  }

  return (
    <StarsContainer>
      {[...Array(5)].map((e, index) => getStar(index))}
    </StarsContainer>
  )
}

export default Rating
