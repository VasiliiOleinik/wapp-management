import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'https://swapi.co/api/',
  headers: {
    Authorization: 'Bearer {token}',
  },
});

export default HTTP;
