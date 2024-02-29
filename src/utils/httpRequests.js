import axios from 'axios';

export const httpRequests = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    const response = await httpRequests.get(path, options);
    return response.data;
};

export const post = async (path, options = {}) => {
    const response = await httpRequests.post(path, options);
    return response.data;
};
