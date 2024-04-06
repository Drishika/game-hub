import { AxiosRequestConfig } from 'axios';
import apiClient from './api-client';

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll<T>(requestParam?: AxiosRequestConfig) {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      signal: controller.signal,...requestParam
    });
    return { request, cancel: () => controller.abort() };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
