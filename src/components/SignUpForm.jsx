import React from 'react'
import { useFormik } from 'formik'
import Button from './Button'
import Text from './Text'
import Box from './Box'
import Input from './Input'
import Wrapper from './Wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../redux/auth/authActions'
import * as Yup from 'yup'

const SignUpForm = () => {
  const dispatch = useDispatch()
  const { error, isLoading } = useSelector((state) => state.auth)

  const formik = useFormik({
    initialValues: {
      name: '',
      last: '',
      email: '',
      password: '',
      repassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo requerido'),
      last: Yup.string().required('Campo requerido'),
      email: Yup.string().email('Correo invalido').required('Campo requerido'),
      password: Yup.string().required('Campo requerido'),
      repassword: Yup.string()
        .required('Campo requerido')
        .when('password', {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref('password')],
            'Debe coincidir con tu password'
          ),
        }),
    }),
    onSubmit: (values) => handleSubmit(values),
  })

  const handleSubmit = ({ name, last, email, password, repassword }) => {
    const form = new FormData()
    form.append('first_name', name)
    form.append('last_name', last)
    form.append('email', email.toLowerCase())
    form.append('role', 'user')
    form.append('password', password)
    form.append('repassword', repassword)

    dispatch(signUp(form))
  }

  return (
    <Wrapper loading={isLoading} mt="30px">
      <Box p={2}>
        <Text fontFamily="black" fontSize="26px" mx="auto" mb={1}>
          Crear Cuenta
        </Text>
      </Box>
      <Box mb={2}>
        <Text fontSize="14px" fontFamily="bold" color="error">
          {error}
        </Text>
      </Box>
      <Input
        bg="shade5"
        autoCompleteType="off"
        placeholder="Nombre"
        onChangeText={formik.handleChange('name')}
        value={formik.values.name}
        textHelper={
          formik.errors.name && formik.touched.name ? formik.errors.name : null
        }
      />
      <Input
        bg="shade5"
        autoCompleteType="off"
        placeholder="Apellidos"
        onChangeText={formik.handleChange('last')}
        value={formik.values.last}
        textHelper={
          formik.errors.last && formik.touched.last ? formik.errors.last : null
        }
      />
      <Input
        bg="shade5"
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
        type="password"
        placeholder="Contraseña"
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        textHelper={
          formik.errors.password && formik.touched.password
            ? formik.errors.password
            : null
        }
      />
      <Input
        bg="shade5"
        type="password"
        placeholder="Confirmar Contraseña"
        onChangeText={formik.handleChange('repassword')}
        value={formik.values.repassword}
        textHelper={
          formik.errors.repassword && formik.touched.repassword
            ? formik.errors.repassword
            : null
        }
      />
      <Button mt="3" variant="primary" fluid onPress={formik.handleSubmit}>
        Crear Cuenta
      </Button>
    </Wrapper>
  )
}

export default SignUpForm
