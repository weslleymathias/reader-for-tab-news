import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://www.tabnews.com.br/api/v1'
})

