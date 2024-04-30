import { combineReducers } from "redux";
import { loginReducer } from "./reducer/loginReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
});
