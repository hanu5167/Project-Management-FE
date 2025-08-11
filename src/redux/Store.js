// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../redux/reducer/ProjectsSlice";
import tasksReducer from "../redux/reducer/TasksSlice";
import authReducer from "../redux/reducer/AuthSlice"
const Store = configureStore({
  reducer: {
 
    projects: projectsReducer,
    tasks: tasksReducer,
    auth:authReducer
  },
});

export default Store;
