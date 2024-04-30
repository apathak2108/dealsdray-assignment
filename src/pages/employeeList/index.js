import React from "react";
import Header from "../../components/header";
import GetEmployeeList from "../../components/getEmployeeListTable";
import Navbar from "../../components/Navbar";

const EmployeeList = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="employee-list-main-container">
        <div className="employee-list-content-container">
          <GetEmployeeList />
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
