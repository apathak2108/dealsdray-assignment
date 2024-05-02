import React from "react";
import InputField from "../InputField";
import "./Navbar.css";
import SearchIcon from "../../images/searchIcon.png";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const employees = useSelector((state) => state?.employees?.employees);
  const numOfEmployees = employees.length;
  return (
    <div className="navbar-main-container">
      <div className="navbar-left-potion">
        <InputField
          type="text"
          placeholder="Search..."
          className="search-bar"
        />
        <img src={SearchIcon} alt="search-icon" className="search-icon" />
      </div>
      <div className="navbar-right-potion">
        <span style={{fontWeight:"600"}}>Total Count: {numOfEmployees}</span>
        <Button
          name="Create Employee"
          className="create-employee-button"
          onClick={() => navigate("/dashboard/create-employee")}
        />
      </div>
    </div>
  );
};

export default Navbar;
