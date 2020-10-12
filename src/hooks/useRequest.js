/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { readFromCache, writeToCache } from '../utils/cache'

const useRequest = (url, useCache = true) => {
  const [data, setData] = useState()
  const [error, setError] = useState()

  const getFreshData = async () => {
    try {
      const { data: response } = await axios.get(url)
      useCache && writeToCache(url, response)
      setData(response)
    } catch (e) {
      setError(e)
    }
  }

  const getCachedData = () => {
    const cachedData = readFromCache(url)
    cachedData && setData(cachedData)
  }

  useEffect(() => {
    useCache && getCachedData()
    getFreshData()
  }, [])

  const loading = !data && !error

  return {
    data,
    loading,
    error
  }
}

export default useRequest
