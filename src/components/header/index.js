import React, { useState } from "react";
import HeaderLogo from "../../images/headerLogo.png";
import Button from "../Button";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left-portion">
          <img src={HeaderLogo} className="header-logo" alt="Logo"></img>
        </div>
        <div className="header-right-portion">
          <Button name="Logout" className="logout-button" />
        </div>
      </div>
    </>
  );
};

export default Header;
