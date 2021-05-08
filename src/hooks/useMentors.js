import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const fetchMentors = () => {
  const { token } = useSelector((state) => state.auth)
  const API_URL = `http://45.55.110.117/mentornow-api/api/public/users/mentors?Authorization=${token}`
  console.log('====================================')
  console.log(API_URL)
  console.log('====================================')

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch(API_URL)
    console.log('=============== response =====================')
    console.log(response)
    console.log('====================================')
    //const data = await response.json()
    setData(response)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, data }
}

export { fetchMentors }
