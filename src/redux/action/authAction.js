import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actionTypes";

export const login = (email, password, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      if (response.status === 200) {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data.user });
        localStorage.setItem("loginStatus", true);
        localStorage.setItem("currentUserName", response.data.user.name);
        window.location.href = "/dashboard";
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: response.data.error });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Invalid Login Details");
      dispatch({
        type: LOGIN_FAILURE,
        payload: "An error occurred while logging in",
      });
    }
  };
};
