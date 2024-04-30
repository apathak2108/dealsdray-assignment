import React from "react";
import Header from "../../components/header";
import Button from "../../components/Button";
import "./CreateEmployee.css";

const CreateEmployee = () => {
  return (
    <>
      <Header />
      <div className="create-employee-main-container">
        <div className="create-employee-content-container">
          <h3>Create Employee</h3>
          <form className="create-employee-form">
            <label>
              Name: <input name="name" type="text" required />
            </label>
            <label>
              Email: <input name="email" type="email" required />
            </label>
            <label>
              Mobile Number:{" "}
              <input name="mobile" type="tel" maxLength="10" required />
            </label>
            <label>
              Designation:{" "}
              <select>
                <option name="hr"> HR</option>
                <option name="manager">Manager</option>
                <option name="sales">Sales</option>
              </select>
            </label>
            <label>
              Gender: <input type="radio" value="Male" name="gender" /> Male
              <input type="radio" value="Female" name="gender" /> Female
            </label>
            <label>
              Course: <input type="checkbox" value="MCA" name="course" /> MCA
              <input type="checkbox" value="BCA" name="course" /> BCA
              <input type="checkbox" value="BSC" name="course" /> BSC
            </label>
            <label>
              Upload Image:{" "}
              <input name="image" type="file" accept=".jpg,.png" required />
            </label>
            <Button
              name="SUBMIT"
              type="submit"
              className="create-employee-submit-button"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEmployee;
