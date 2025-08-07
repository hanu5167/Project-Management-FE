// src/redux/signUpSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = signUpSlice.actions;
export default signUpSlice.reducer;
