import React from "react";
import Header from "../../components/header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import './NotFound.css';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="error-404-main-container">
        <div className="error-404-content-container">
          <h1>404</h1>
          <span>Sorry, We couldn't find that page !</span>
          <Button
            name="Go to Dashboard"
            onClick={() => navigate("/dashboard")}
            className="error-404-button"
          />
        </div>
      </div>
    </>
  );
};

export default Error404;
