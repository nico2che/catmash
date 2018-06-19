import axios from 'axios';

const api = axios.create();

const catApi = {
  getAll: () => api.get(`${process.env.PUBLIC_URL}/cats.json`),
}

export default catApi;
