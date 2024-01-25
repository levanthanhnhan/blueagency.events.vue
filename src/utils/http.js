import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_HOST,
  headers: {
    "Content-type": "application/json",
  },
});

export default http;
