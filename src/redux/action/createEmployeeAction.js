import {
  CREATE_EMPLOYEE_FAILURE,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_SUCCESS,
} from "../actionTypes";
import axios from "axios";

export const createEmployeeRequest = () => ({
  type: CREATE_EMPLOYEE_REQUEST,
});

export const createEmployeeSuccess = () => ({
  type: CREATE_EMPLOYEE_SUCCESS,
});

export const createEmployeeFailure = (error) => ({
  type: CREATE_EMPLOYEE_FAILURE,
  payload: error,
});

export const createEmployee = (formData, navigate) => {
  return async (dispatch) => {
    dispatch(createEmployeeRequest());
    try {
      const response = await axios.post(
        "http://localhost:5000/api/employees",
        formData
      );
      dispatch(createEmployeeSuccess());
      navigate("/dashboard/employee-list");
    } catch (error) {
      dispatch(createEmployeeFailure(error));
      console.error("Error submitting form:", error);
    }
  };
};
