import {
  SET_LOGIN_EMAIL,
  SET_LOGIN_PASSWORD,
} from "../actionTypes";

export const setLoginEmail = (value) => {
  return {
    type: SET_LOGIN_EMAIL,
    payload: value,
  };
};

export const setLoginPassword = (value) => {
  return {
    type: SET_LOGIN_PASSWORD,
    payload: value,
  };
};

