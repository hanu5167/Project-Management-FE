import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectsList: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjectsList: (state, action) => {
      state.projectsList = action.payload;
    },
  },
});

export const { setProjectsList } = projectsSlice.actions;

export default projectsSlice.reducer;
