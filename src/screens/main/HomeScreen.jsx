import React from 'react'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Wrapper from '../../components/Wrapper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = ({ navigation }) => {
  //AsyncStorage.clear()
  return (
    <Container p={4}>
      <Wrapper>
        <Text color="primary" fontSize="46px" fontFamily="black">
          ¡Bienvenido!
        </Text>
        <Text style={{ textAlign: 'center', marginTop: 30 }}>
          Nuestros Mentores están listo y entusiasmados por ayudarte con tus
          materias o alguna actividad que desees aprender
        </Text>
        <Text style={{ textAlign: 'center', marginTop: 30 }}>
          Puedes buscar por materias o topicos de tu interes, como musica,
          danza, lenguas, fisica, matematicas, etc.
        </Text>
        <Text style={{ textAlign: 'center', marginTop: 30 }}>
          ó si lo prefieres buscar por tu mentor favorito.
        </Text>
      </Wrapper>
    </Container>
  )
}

export default HomeScreen
