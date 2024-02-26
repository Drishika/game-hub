import axios, { CanceledError } from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b0a9d708844243f398af2e8ac8eb2bee',
  },
});

export default apiClient;

export { CanceledError };
