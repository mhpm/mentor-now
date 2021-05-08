import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, data }
}

export default useFetch
