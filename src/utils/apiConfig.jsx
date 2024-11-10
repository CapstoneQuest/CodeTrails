import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-prod-production-a3b1.up.railway.app/",
});

export default api;
