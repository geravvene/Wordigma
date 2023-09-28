import axios from "axios";

const axiosInstanse = axios.create({
  baseURL: `http://localhost:5172/`,
});
let user;

export const DataService = {
  async setUser(data) {
    user = data;
    window.localStorage.setItem(`user`, JSON.stringify(user));
  },
  async getData(path) {
    return (await axiosInstanse.get(path)).data;
  },
  async updateData(path, item) {
    return await axiosInstanse.put(path, item);
  },
  async postData(path, item) {
    return axiosInstanse.post(path, item);
  },
};
