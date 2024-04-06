import axios, { CanceledError } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next?: string;
  prev?: string;
  results: T[];
}

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b0a9d708844243f398af2e8ac8eb2bee',
  },
});

export default apiClient;

export { CanceledError };
