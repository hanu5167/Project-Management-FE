import axios from "axios";
import { setTasksList } from "../redux/reducer/TasksSlice";

export const getAllTasks = async (dispatch) => {
  try {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((response) => {
        if (response) {
          dispatch(setTasksList(response.data));
        }
      })
      .catch((err) => {
        console.log("Error in getAllTasks: ", err);
      });
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
