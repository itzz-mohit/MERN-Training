import axios from "axios";
const URL = "http://localhost:3000";

export const register = async (userData) => {
  try {
    const response = await axios.post(`${URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error while calling register user API:", error);
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.log("Error while calling login user API");
    console.error(error);
  }
};
