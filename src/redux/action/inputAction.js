import {
  SET_COURSE,
  SET_SELECTED_COURSE,
  SET_SELECTED_GENDER,
} from "../actionTypes";

export const setCourse = () => {
  return {
    type: SET_COURSE,
  };
};

export const setSelectedCourse = (value) => {
  return {
    type: SET_SELECTED_COURSE,
    payload: value,
  };
};

export const setSelectedGender = (gender) => {
  return {
    type: SET_SELECTED_GENDER,
    payload: gender,
  };
};
