import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../../redux/auth/authActions'
import { FontAwesome5 } from '@expo/vector-icons'
import { Button, Container, Text, Box, Wrapper, Input } from '../../components'

const RecoveryScreen = () => {
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState(null)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { error, isLoading } = useSelector((state) => state.auth)

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Correo invalido').required('Campo requerido'),
    }),
    onSubmit: (values) => handleSubmit(values),
  })

  const handleSubmit = async ({ email }) => {
    const form = new FormData()
    form.append('email', email.toLowerCase())
    await dispatch(resetPassword(form))

    if (!error) {
      setSuccess(true)
      setMessage('Correo de recuperación enviado correctamente')
    }
  }

  return (
    <Container p={3} icon>
      <Wrapper loading={isLoading}>
        {success ? (
          <Box width="100%" justifyContent="center" alignItems="center">
            <FontAwesome5 name="check" size={38} color="lime" />
            <Text textAlign="center">{message}</Text>
            <Button
              mt="4"
              variant="primary"
              onPress={() => navigation.goBack()}
            >
              Volver
            </Button>
          </Box>
        ) : (
          <Box width="100%">
            <Box mb={3}>
              <Text fontSize="14px" fontFamily="bold" color="error">
                {error || message}
              </Text>
            </Box>

            <Input
              bg="shade5"
              label="Emial:"
              autoCompleteType="off"
              placeholder="Email"
              onChangeText={formik.handleChange('email')}
              value={formik.values.email}
              textHelper={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : null
              }
            />
            <Button
              mt="3"
              variant="primary"
              fluid
              onPress={formik.handleSubmit}
            >
              Recuperar Contraseña
            </Button>
          </Box>
        )}
      </Wrapper>
    </Container>
  )
}

export default RecoveryScreen
