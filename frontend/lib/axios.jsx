import axios from "axios";
//dynamic url for production
const BASE_URL=import .meta.env.MODE==="development" ? "http://localhost:5001/api":"/api"
const axiosApi = axios.create({
  baseURL: BASE_URL,
});

export default axiosApi;
