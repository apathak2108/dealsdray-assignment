import {
  CREATE_EMPLOYEE_FAILURE,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  error: null,
};

export const createEmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CREATE_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
