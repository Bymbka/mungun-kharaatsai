import axios from "axios";

const instance = axios.create({
  baseURL: "https://mungun-kharaatsa-default-rtdb.firebaseio.com/",
});

export default instance;
