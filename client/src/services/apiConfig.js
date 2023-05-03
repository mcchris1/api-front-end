import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://simple-pokemon-api.herokuapp.com/",
  development: "https://simple-pokemon-api.herokuapp.com/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
