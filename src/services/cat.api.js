import axios from 'axios';

const api = axios.create();

const catApi = {
  getAll: () => api.get('/cats.json'),
}

export default catApi;
