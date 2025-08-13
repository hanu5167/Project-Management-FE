import axios from "axios";
import {
  setProjectDetails,
  setProjectsList,
} from "../redux/reducer/ProjectsSlice";

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

export const getProjectById = (id) => {
  return async (dispatch) => {
    try {
      // const token = localStorage.getItem("jwtToken"); // adjust key if needed
      // console.log(token, "token");
      const response = await axios.get(
        `http://localhost:5000/api/projects/${id}`
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );

      if (response?.data) {
        dispatch(setProjectDetails(response.data));
        console.log("Fetched Project Details:", response.data);
      }
    } catch (error) {
      console.error("Error in getProjectById:", error);
    }
  };
};
