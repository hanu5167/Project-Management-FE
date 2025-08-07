// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "../redux/reducer/SignUpSlice";
import loginReducer from "../redux/reducer/LoginSlice";
const Store = configureStore({
  reducer: {
    signUp: signUpReducer,
    login: loginReducer,
  },
});

export default Store;
