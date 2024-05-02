import {
  SET_EDIT_INDEX,
  UPDATE_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
} from "../actionTypes";

const initialState = {
  editIndex: "",
  loading: false,
  error: null,
};

export const setEditIndexReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT_INDEX:
      return {
        ...state,
        editIndex: action.payload,
      };
    case UPDATE_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case UPDATE_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
