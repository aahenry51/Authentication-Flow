import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export const axiosAPI = {
  get: async (endPoint) => {
    return instance
      .get(endPoint)
      .then((response) => response)
      .catch((error) => Promise.reject(error));
  },

  post: async (endPoint, data) => {
    return instance
      .post(endPoint, data)
      .then((response) => response)
      .catch((error) => Promise.reject(error));
  },
};
