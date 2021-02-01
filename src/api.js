import axios from "axios";

axios.defaults.headers.post["Accept"] = "*/*";
const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  withCredentials: false,
});
const jsonInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return error.response ? error.response : error;
  }
);
jsonInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response ? error.response : error;
  }
);

export const getCurrentExibitions = () =>
  jsonInstance.get("exibitions/current").then((response) => {
    return response;
  });
export const getExibitionsOnView = () =>
  jsonInstance.get("exibitions/onview").then((response) => {
    return response;
  });
export const getCollections = (search = "") => {
  return jsonInstance.get(`/collections${search}`).then((response) => {
    return response;
  });
};
