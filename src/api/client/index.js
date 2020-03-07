import axios from "axios";

const baseURL = process.env.VUE_APP_COVID_API_URL;

const covid19Api = axios.create({
  baseURL
});

export { covid19Api };