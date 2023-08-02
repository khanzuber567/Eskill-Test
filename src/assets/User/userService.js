import axios from "axios";

const API_URL = "/api/user";

const register = async (userData) => {
  const response = await axios.post(API_URL + "/register", userData);
  console.log(response)
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const userService = {
  register,
};

export default userService;