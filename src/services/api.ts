import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 6000,
});

export default api;