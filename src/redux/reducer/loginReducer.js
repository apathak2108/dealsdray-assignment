import {
  SET_LOGIN_EMAIL,
  SET_LOGIN_PASSWORD,
} from "../actionTypes";

const initialState = {
  email: "",
  password: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_LOGIN_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};
