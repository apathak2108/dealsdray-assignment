import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_FAILURE,
  FETCH_EMPLOYEES_SUCCESS,
  DELETE_EMPLOYEE_SUCCESS,
} from "../actionTypes";
import axios from "axios";

export const fetchEmployees = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_EMPLOYEES_REQUEST });

    try {
      const response = await axios.get("http://localhost:5000/api/employees");
      dispatch({
        type: FETCH_EMPLOYEES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      alert("Data is not fetched !");
      dispatch({
        type: FETCH_EMPLOYEES_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const deleteEmployee = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:5000/api/employee/${id}`);
      dispatch({
        type: DELETE_EMPLOYEE_SUCCESS,
        payload: id,
      });
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Facing issue in deleting employee details !");
    }
  };
};
