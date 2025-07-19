import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:5001/api",
});

export default axiosApi;
