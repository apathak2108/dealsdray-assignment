import { combineReducers } from "redux";
import { loginReducer } from "./reducer/loginReducer";
import authReducer from "./reducer/authReducer";
import { fetchEmployeesReducer } from "./reducer/fetchEmployeesReducer";
import { setEditIndexReducer } from "./reducer/updateEmployeeReducer";
import { setCourseReducer } from "./reducer/inputReducer";
import { createEmployeeReducer } from "./reducer/createEmployeeReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  auth: authReducer,
  employees: fetchEmployeesReducer,
  editIndex: setEditIndexReducer,
  inputs: setCourseReducer,
  create: createEmployeeReducer,
});
