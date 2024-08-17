import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://fast-api-eskm4g3dcq-ue.a.run.app', // Ensure this is HTTP
});