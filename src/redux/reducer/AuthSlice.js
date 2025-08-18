import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: false,
  error: null,
  loginStatus: false,
  isUserRegistered: false,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { token, user } = action.payload; // ✅ destructure

      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      state.error = null;
      state.loginStatus = true;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    },

    loginFailure: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.loginStatus = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      state.loginStatus = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    setIsUserRegistered: (state, action) => {
      state.isUserRegistered = true;
    },
  },
});

export const { loginSuccess, loginFailure, logout, setIsUserRegistered } =
  loginSlice.actions;
export default loginSlice.reducer;
