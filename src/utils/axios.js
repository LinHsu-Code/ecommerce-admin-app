import { api } from "../urlConfig";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    authorization: localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : "",
  },
});

export default axiosInstance;
