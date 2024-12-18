import axios from "axios";

export const baseAPI = axios.create({
    baseURL: process.env.REACT_APP_BASE_API, headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    withCredentials: true
});

baseAPI.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});