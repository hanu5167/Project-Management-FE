import axios from "axios";
import {
  setProjectDetails,
  setProjectsList,
} from "../redux/reducer/ProjectsSlice";
import UseHeader from "../hooks/UseHeader";

export const getAllProjects = async (dispatch) => {
  try {
    axios
      .get("http://localhost:5000/api/projects", {
        headers: UseHeader(),
      })
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

export const getProjectById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/projects/${id}`,
        {
          headers: UseHeader(),
        }
      );

      if (response?.data) {
        dispatch(setProjectDetails(response.data));
      }
    } catch (error) {
      console.error("Error in getProjectById:", error);
    }
  };
};
