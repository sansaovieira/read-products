import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1'
});
