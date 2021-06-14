import axios from 'axios';
// eslint-disable-next-line import/no-relative-parent-imports
import { API_URL } from './urls';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 60 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
});

(window as any).ax = axiosInstance;

export default axiosInstance;
