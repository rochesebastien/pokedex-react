import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pokebuildapi.fr/api/v1',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default axiosInstance;