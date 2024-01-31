// axios base encapsulation
import axios from "axios";

// create base instance
const httpInstance = axios.create({
  baseURL: "https://localhost:8080",
  timeout: 5000,
});

// axios request interceptor
httpInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);

// axios response interceptor
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    return Promise.reject(e);
  }
);

export default httpInstance;
