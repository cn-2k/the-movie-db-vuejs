// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import axios from "axios";
import moviesServices from "./movies";

const API_ENVS = {
  production: "https://api.themoviedb.org/",
  development: "",
  local: "https://api.themoviedb.org/",
};

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV] || API_ENVS.local,
  timeout: 5000,
  params: {
    api_key: import.meta.env.VITE_MDB_API_KEY,
  },
});

export default {
  movies: moviesServices(httpClient),
};
