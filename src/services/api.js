import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tindev-backendserver.herokuapp.com'
});

export default api;