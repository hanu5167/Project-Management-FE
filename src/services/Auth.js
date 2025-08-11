import axios from "axios";

import { loginFailure, loginSuccess } from "../redux/reducer/AuthSlice";

export const login = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      if (response.status === 200 || response.status === 204) {
        dispatch(loginSuccess(response.data));
      }
    } catch (error) {
      if (error?.response?.status === 401) {
        console.log("Response Denied");
        dispatch(loginFailure("Invalid credentials"));
      } else {
        console.log("Unable to login: ", error?.message);
        dispatch(loginFailure("Login failed"));
      }
    }
  };
};
