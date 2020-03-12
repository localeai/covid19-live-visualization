import axios from "axios";

const baseURL = process.env.VUE_APP_COVID_API_URL;
const apiRepositoryURL = process.env.VUE_APP_API_REPO_URL;

const covid19Api = axios.create({
  baseURL
});

const apiRepo = axios.create({
  baseURL: apiRepositoryURL
})

export { covid19Api, apiRepo };