import React, { useState } from "react";
import Header from "../../components/header";
import "./EditEmployee.css";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCourse } from "../../redux/action/inputAction";
import { useNavigate } from "react-router-dom";
import { updateEmployee } from "../../redux/action/updateEmployeeAction";
import CONSTANTS from "../../constants";

const EditEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courses = useSelector((state) => state?.inputs?.course);
  const editIndex = useSelector((state) => state?.editIndex?.editIndex);
  const employees = useSelector((state) => state?.employees?.employees);
  const employeeToEdit = employees.filter((obj) => obj._id === editIndex);

  const [updatedFormData, setUpdatedFormData] = useState({
    name: `${employeeToEdit[0]?.name}`,
    email: `${employeeToEdit[0]?.email}`,
    mobile: `${employeeToEdit[0]?.mobile}`,
    designation: `${employeeToEdit[0]?.designation}`,
    gender: `${employeeToEdit[0]?.gender}`,
    course: `${employeeToEdit[0]?.course}`,
    image: `${CONSTANTS.EMPLOYEE_IMAGE_PATH}`,
  });

  const handleUpdateFormData = (e) => {
    const { name, value } = e.target;
    setUpdatedFormData({
      ...updatedFormData,
      [name]: value,
    });
  };
  const handleFormDataForCourse = (e) => {
    setUpdatedFormData({
      ...updatedFormData,
      course: e.target.value,
    });
    dispatch(setSelectedCourse());
  };

  const handleEmployeeUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateEmployee(updatedFormData, editIndex, navigate));
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <Header />
      <div className="edit-employee-main-container">
        <div className="edit-employee-content-container">
          <h3>Update Employee</h3>
          <form
            className="edit-employee-form"
            onSubmit={handleEmployeeUpdateSubmit}
          >
            <div className="left-and-right-portion-container">
              <div className="form-left-portion">
                <span>Name:</span>
                <span>Email:</span>
                <span>Mobile Number:</span>
                <span>Designation:</span>
                <span>Gender:</span>
                <span>Course:</span>
                <span>Upload Image:</span>
              </div>
              <div className="form-right-portion">
                <span>
                  <input
                    name="name"
                    type="text"
                    value={updatedFormData.name}
                    onChange={handleUpdateFormData}
                    required
                  />
                </span>
                <span>
                  <input
                    name="email"
                    type="email"
                    value={updatedFormData.email}
                    onChange={handleUpdateFormData}
                    required
                  />
                </span>
                <span>
                  <input
                    name="mobile"
                    type="tel"
                    maxLength="10"
                    value={updatedFormData.mobile}
                    onChange={handleUpdateFormData}
                    required
                  />
                </span>
                <span>
                  <select
                    name="designation"
                    value={updatedFormData.designation}
                    onChange={handleUpdateFormData}
                  >
                    <option name="hr"> HR</option>
                    <option name="manager">Manager</option>
                    <option name="sales">Sales</option>
                  </select>
                </span>
                <span>
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={updatedFormData.gender === "Male"}
                    onChange={handleUpdateFormData}
                  />{" "}
                  Male
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    checked={updatedFormData.gender === "Female"}
                    onChange={handleUpdateFormData}
                  />{" "}
                  Female
                </span>
                <span>
                  {courses.map((course) => (
                    <>
                      <input
                        type="checkbox"
                        value={course}
                        name={course}
                        checked={course === updatedFormData.course}
                        onChange={(e) => handleFormDataForCourse(e)}
                      />
                      <label>{course}</label>
                    </>
                  ))}
                </span>
                <span>
                  <input name="image" type="file" accept=".jpg,.png" />
                </span>
              </div>
            </div>
            <Button
              name="UPDATE"
              type="submit"
              className="create-employee-submit-button"
            />
          </form>
        </div>{" "}
      </div>
    </>
  );
};

export default EditEmployee;
