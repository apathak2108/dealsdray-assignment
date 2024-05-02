import React from "react";
import HeaderLogo from "../../images/headerLogo.png";
import Button from "../Button";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("currentUserName");
    window.location.reload();
  };
  const userName = localStorage.getItem("currentUserName");

  return (
    <>
      <div className="header">
        <div className="header-left-portion">
          <img
            src={HeaderLogo}
            className="header-logo"
            alt="Logo"
            onClick={() => navigate("/dashboard")}
          ></img>
          <Link to="/dashboard" className="link">Home</Link>
          <Link to="/dashboard/employee-list" className="link">Employee List</Link>
        </div>
        <div className="header-right-portion">
          <span>Hello, <span className="username">{userName} !</span></span>
          <Button
            name="Logout"
            className="logout-button"
            onClick={handleLogout}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
