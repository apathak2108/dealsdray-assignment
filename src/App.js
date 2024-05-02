import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import CreateEmployee from "./pages/createEmployee";
import EditEmployee from "./pages/editEmployee";
import EmployeeList from "./pages/employeeList";
import Error404 from "./pages/notFound";

const App = () => {
  const loginStatus = localStorage.getItem("loginStatus");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            loginStatus ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={loginStatus ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard/create-employee"
          element={loginStatus ? <CreateEmployee /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard/edit-employee"
          element={loginStatus ? <EditEmployee /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard/employee-list"
          element={loginStatus ? <EmployeeList /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
