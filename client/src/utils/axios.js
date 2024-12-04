import axios from 'axios';
import { useAuthStore } from './store';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // Base URL for all API requests
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': useAuthStore.getState().apiKey,
  },
});

export default axiosInstance;
