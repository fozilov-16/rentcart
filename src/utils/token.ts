import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const saveToken = (token: string) => {
  localStorage.setItem("authtoken", token);
}
export const getToken = () => {
  return localStorage.getItem("authtoken");
}

export const decodedToken = () => {
  return getToken()&&jwtDecode(getToken())
}


export const axiosRequest = axios.create({
  baseURL: 'http://157.180.29.248:5049/'
});

axiosRequest.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
  },
  (error) => Promise.reject(error)
);
