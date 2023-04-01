import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import PropTypes from 'prop-types';
import { readFromCache, writeToCache } from '../utils/cache';

interface UseRequestProps {
  url: string;
  useCache?: boolean;
}

interface CacheData {
  [key: string]: any;
}

interface UseRequestData {
  data: CacheData | undefined;
  loading: boolean;
  error: any;
}

const useRequest = ({
  url,
  useCache = true
}: UseRequestProps): UseRequestData => {
  const [data, setData] = useState<CacheData>();
  const [error, setError] = useState<any>();

  const getFreshData = async () => {
    try {
      const { data: response }: AxiosResponse = await axios.get(url);
      useCache && writeToCache(url, response);
      setData(response);
    } catch (e: any) {
      setError(e);
    }
  };

  const getCachedData = () => {
    const cachedData = readFromCache(url);
    cachedData && setData(cachedData);
  };

  useEffect(() => {
    useCache && getCachedData();
    getFreshData();
    // eslint-disable-next-line
  }, []);

  const loading = !data && !error;

  return {
    data,
    loading,
    error
  };
};

useRequest.propTypes = {
  url: PropTypes.string.isRequired,
  useCache: PropTypes.bool
};

export default useRequest;
