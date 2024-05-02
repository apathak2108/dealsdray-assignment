import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  DELETE_EMPLOYEE_SUCCESS,
} from "../actionTypes";

const initialState = {
  employees: [],
  loading: false,
  error: "",
};

export const fetchEmployeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: action.payload,
        error: "",
      };
    case FETCH_EMPLOYEES_FAILURE:
      return {
        ...state,
        loading: false,
        employees: [],
        error: action.payload,
      };
    case DELETE_EMPLOYEE_SUCCESS:
      const updatedEmployees = state?.employees.filter(
        (employee) => employee?._id !== action.payload
      );
      return {
        ...state,
        employees: updatedEmployees,
      };
    default:
      return state;
  }
};
