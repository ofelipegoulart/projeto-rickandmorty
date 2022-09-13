import axios from 'axios';

const API = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character',
    timeout: 1000,
})

export default API;