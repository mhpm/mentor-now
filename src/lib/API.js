const API = 'http://45.55.110.117/mentornow-api/api/public/'
const data = undefined
const error = undefined
const token = undefined

export const SignIn = (email, password) => {
  const form = new FormData()
  form.append('email', email.toLowerCase())
  form.append('password', password)

  return fetch(`${API}/users/login`, {
    method: 'POST',
    body: form,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.token) {
        navigation.navigate('Main')
        return
      }
      setMsg(data.message)
      setLoading(false)
    })
    .catch((error) => {
      console.error('Error: ', error)
      setMsg('Parece que hubo un error inesperado, intenta iniciar mas tarde.')
      setLoading(false)
    })
}
