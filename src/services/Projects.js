import axios from "axios";
import { setProjectsList } from "../redux/reducer/ProjectsSlice";

export const getAllProjects = async (dispatch) => {
  try {
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => {
        if (response) {
          dispatch(setProjectsList(response.data));
        }
      })
      .catch((err) => {
        console.log("Error in getAllProjects: ", err);
      });
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
