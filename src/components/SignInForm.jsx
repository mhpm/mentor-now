import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import Button from './Button'
import Text from './Text'
import Box from './Box'
import Input from './Input'
import Wrapper from './Wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../redux/auth/authActions'
import * as Yup from 'yup'

const SignInForm = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { error, isLoading } = useSelector((state) => state.auth)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Correo invalido').required('Campo requerido'),
      password: Yup.string().required('Campo requerido'),
    }),
    onSubmit: (values) => handleSubmit(values),
  })

  const handleSubmit = ({ email, password }) => {
    const form = new FormData()
    form.append('email', email.toLowerCase())
    form.append('password', password)

    dispatch(signIn(form))
  }

  return (
    <Wrapper loading={isLoading}>
      <Box p={2}>
        <Text fontFamily="black" fontSize="26px" mx="auto" mb={3}>
          Inicio de Sesión
        </Text>
      </Box>
      <Box mb={3}>
        <Text fontSize="14px" fontFamily="bold" color="error">
          {error}
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
      <Input
        bg="shade5"
        label="Password:"
        type="password"
        placeholder="Password"
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        textHelper={
          formik.errors.password && formik.touched.password
            ? formik.errors.password
            : null
        }
      />
      <Button mt="3" variant="primary" fluid onPress={formik.handleSubmit}>
        Iniciar Sesión
      </Button>
      <Text isLink mt={3} onPress={() => navigation.navigate('Recovery')}>
        ¿Olvidaste tu contraseña?
      </Text>
    </Wrapper>
  )
}

export default memo(SignInForm)
