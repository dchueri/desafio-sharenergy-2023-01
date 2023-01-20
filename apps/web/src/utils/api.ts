import axios from "axios";
import { AuthService } from "./services/AuthService";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const user = AuthService.getUserLocalStorage();
    config.headers.Authorization = "Bearer " + user?.token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
