interface CacheData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface CacheFunctions {
  readFromCache: (url: string) => CacheData | null;
  writeToCache: (url: string, data: CacheData) => void;
}

const readFromCache: CacheFunctions['readFromCache'] = (url) => {
  const cachedData = localStorage.getItem(url);
  return cachedData ? JSON.parse(cachedData) : null;
};

const writeToCache: CacheFunctions['writeToCache'] = (url, data) => {
  if (url) {
    localStorage.setItem(url, JSON.stringify(data));
  }
};

export { readFromCache, writeToCache };
