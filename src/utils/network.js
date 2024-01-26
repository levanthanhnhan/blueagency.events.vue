import { data } from "autoprefixer";
import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_HOST,
  headers: {
    "Content-type": "application/json",
  },
});

const get = (resource, endpoint) => {
  const url = resource.concat(endpoint);
  return http.get(url);
};

const post = (resource, endpoint, data) => {
  const url = resource.concat(endpoint);
  return http.post(url, data);
};

export default { get, post };
