import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import CreateEmployee from "./pages/createEmployee";
import EditEmployee from "./pages/editEmployee";
import EmployeeList from "./pages/employeeList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/dashboard/create-employee" element={<CreateEmployee />} />
        <Route path="/dashboard/edit-employee" element={<EditEmployee />} />
        <Route path="/dashboard/employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
