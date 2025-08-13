import axios from "axios";

import {
  loginFailure,
  loginSuccess,
  setIsUserRegistered,
} from "../redux/reducer/AuthSlice";
import { toast } from "react-toastify";

const baseURL = "http://localhost:5000/api/auth/";

export const login = (formData) => {
  console.log(formData, "form");
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseURL}login`, formData);

      if (response.status === 200 || response.status === 204) {
        dispatch(loginSuccess(response.data));
        toast.success("Successfully Logged in");
      }
    } catch (error) {
      if (error?.response?.status === 401 || error?.response?.status === 404) {
        console.log("Response Denied");
        dispatch(loginFailure("Invalid credentials"));
        toast.error("Invalid credentials");
      } else {
        console.log("Unable to login: ", error?.message);
        dispatch(loginFailure("Login failed"));
        toast.error("Unable to login");
      }
    }
  };
};

export const register = (formData) => {
  return async (dispatch) => {
    console.log("formData", formData);
    try {
      const response = await axios.post(`${baseURL}register`, formData);

      console.log("response: ", response.data);

      if (response.status === 201) {
        console.log("User registered successfully");
        console.log("Response: ", response.data);
        dispatch(setIsUserRegistered(response.data));
        toast.success("User registered successfully");
      }
    } catch (error) {
      if (error?.response?.status === 500) {
        console.log("Response Denied");
        toast.error("Internal Server Error");
      } else if (error?.response?.status === 400) {
        console.log("Error in register: ", error?.message);
        toast.error("User with same name or Email is already exists");
      } else {
        toast.error(`Error in Register  ${error?.message}`);
      }
    }
  };
};
