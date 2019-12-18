import axios from 'axios';

const baseURL = 'https://api-gateway-npr.herokuapp.com/'

const api = axios.create({
  baseURL: process.env.BASE_URL || baseURL,
});

export default api;