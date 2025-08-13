import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projectsList: [],
    projectDetails: "",
  },
  reducers: {
    setProjectsList: (state, action) => {
      state.projectsList = action.payload;
    },
    setProjectDetails: (state, action) => {
      state.projectDetails = action.payload;
    },
  },
});

export const { setProjectsList, setProjectDetails } = projectsSlice.actions;

export default projectsSlice.reducer;
