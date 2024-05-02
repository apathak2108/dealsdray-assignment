import {
  SET_COURSE,
  SET_SELECTED_COURSE,
  SET_SELECTED_GENDER,
} from "../actionTypes";

const initialState = {
  course: ["MCA", "BCA", "BBA"],
  selectedCourse: "",
  selectedGender: "",
};

export const setCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSE:
      return {
        ...state,
      };
    case SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: action.payload,
      };
    case SET_SELECTED_GENDER:
      return {
        ...state,
        selectedGender: action.payload,
      };
    default:
      return state;
  }
};
