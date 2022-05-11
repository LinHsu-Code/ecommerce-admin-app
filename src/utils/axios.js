import { api } from "../urlConfig";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: api,
  responseType: "json",
});

axiosInstance.interceptors.request.use((config) => {
  if (
    config.url &&
    !config.url.includes("signup") &&
    !config.url.includes("signin")
  ) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: localStorage.getItem("token")
          ? `Bearer ${localStorage.getItem("token")}`
          : "",
      },
    };
  }
  return config;
});

export default axiosInstance;
