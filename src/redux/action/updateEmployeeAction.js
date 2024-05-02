import {
  SET_EDIT_INDEX,
  UPDATE_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
} from "../actionTypes";
import axios from "axios";

export const setEditIndex = (id) => {
  return {
    type: SET_EDIT_INDEX,
    payload: id,
  };
};

export const updateEmployeeRequest = () => ({
  type: UPDATE_EMPLOYEE_REQUEST,
});

export const updateEmployeeSuccess = () => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
});

export const updateEmployeeFailure = (error) => ({
  type: UPDATE_EMPLOYEE_FAILURE,
  payload: error,
});

export const updateEmployee = (updatedFormData, editIndex, navigate) => {
  return async (dispatch) => {
    dispatch(updateEmployeeRequest());
    try {
      const response = await axios.post(
        "http://localhost:5000/api/employees/update",
        {
          id: editIndex,
          ...updatedFormData,
        }
      );
      dispatch(updateEmployeeSuccess());
      console.log("Employee updated successfully:", response.data);
      navigate("/dashboard/employee-list");
    } catch (error) {
      dispatch(updateEmployeeFailure(error));
      console.error("Error updating employee:", error);
      alert("Error in Updating Employee Details");
    }
  };
};
