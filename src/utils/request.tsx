/* eslint-disable no-unused-expressions */
import axios from 'axios'
import { readFromCache, writeToCache } from './cache'

const getFreshData = async (url: string, cacheResponse = false) => {
  const { data } = await axios.get(url)
  cacheResponse && writeToCache(url, data)
  return data
}

const getCachedData = (url: string) => readFromCache(url)

export { getCachedData, getFreshData }
