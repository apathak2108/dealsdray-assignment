import React from "react";
import InputField from "../InputField";
import "./Navbar.css";
import SearchIcon from "../../images/searchIcon.png";
import Button from "../Button";

const Navbar = () => {
  return (
    <div className="navbar-main-container">
      <div className="navbar-left-potion">
        <InputField
          type="text"
          placeholder="Search..."
          className="search-bar"
        />
        <img src={SearchIcon} alt="search-icon" className="search-icon"/>
      </div>
      <div className="navbar-right-potion">
        <span>Total Count: 2</span>
        <Button name="Create Employee" className="create-employee-button"/>
      </div>
    </div>
  );
};

export default Navbar;
