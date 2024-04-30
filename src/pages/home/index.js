import React from "react";
import Header from "../../components/header";
import Button from "../../components/Button";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="home-page-main-container">
        <div className="home-page-content-container">
          <div className="home-page-welcome-message">
            Welcome to Admin Panel
          </div>
          <div className="home-page-redirection-button">
            <Button
              name="Employee List"
              className="home-page-button"
              onClick={() => navigate("/dashboard")}
            />
            <Button
              name="Create Employee"
              className="home-page-button"
              onClick={() => navigate("/dashboard/create-employee")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
