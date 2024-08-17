import axios from 'axios';

export const apiClient = axios.create({
    //baseURL: 'http://127.0.0.1:8001', // on development before push
     baseURL: 'https://fast-api-eskm4g3dcq-ue.a.run.app', // on production after a push
});