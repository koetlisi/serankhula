import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://34.16.24.26:8000/api', // Ensure this is HTTP
});