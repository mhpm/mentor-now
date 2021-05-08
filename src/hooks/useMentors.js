import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import mentors from '../mock/mentors'

const fetchMentors = () => {
  const { token } = useSelector((state) => state.auth)
  const API_URL = `http://45.55.110.117/mentornow-api/api/public/users/mentors?Authorization=${token}`

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch(API_URL)
    setData(mentors)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, data }
}

export { fetchMentors }
