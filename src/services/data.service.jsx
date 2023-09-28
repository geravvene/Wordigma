import axios from "axios";

const server = axios.create({
  baseURL: `http://localhost:5172/`,
});

export const DataService = {
  async getData(path) {
    return (await server.get(path)).data;
  },
  async updateData(path, item) {
    return await server.put(path, item);
  },
  async postData(path, item) {
    return await server.post(path, item);
  },
};
