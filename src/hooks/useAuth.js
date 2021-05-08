import { useDispatch, useSelector } from 'react-redux'
import { facebookSignIn } from '../../redux/auth/authActions'

const dispatch = useDispatch()
const { error } = useSelector((state) => state.auth)

const FacebookSignIn = () => {
  const [loading, setLoading] = useState(true)

  const Login = async () => {
    const response = await dispatch(facebookSignIn)
    console.log('====================================')
    console.log(response)
    console.log('====================================')
    setLoading(false)
  }

  useEffect(() => {
    Login()
  }, [])

  return { loading, error }
}

export { FacebookSignIn }
