import axios from "axios";
import { getToken } from "../authFunc";

export const BASE_URL = "https://mindcrafter-backend-production.up.railway.app/";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (config && token) {
      // Convert headers to a plain object
      const headers = { ...config.headers.common };
      // Set 'Authorization' header
      headers.Authorization = `Bearer ${token}`;

      // Update the config with the modified headers
      config.headers = headers;

      console.log("config", config);
      return config;
    } else {
      return config;
    }
  },
  (error) => Promise.reject(error)
);
