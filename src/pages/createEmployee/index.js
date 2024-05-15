import React, { useState } from "react";
import Header from "../../components/header";
import Button from "../../components/Button";
import "./CreateEmployee.css";
import { setSelectedCourse } from "../../redux/action/inputAction";
import { createEmployee } from "../../redux/action/createEmployeeAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CONSTANTS from "../../constants";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state?.inputs?.course);
  const selectedGender = useSelector((state) => state?.inputs?.selectedGender);
  console.log(selectedGender);
  const selectedCourse = useSelector((state) => state?.inputs?.selectedCourse);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: [],
    image: `${CONSTANTS.EMPLOYEE_IMAGE_PATH}`,
  });
  console.log(formData);
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormDataForCourse = (e) => {
    const { name, checked } = e.target;
    const updatedCourses = checked
      ? [...formData.course, name]
      : formData.course.filter((course) => course !== name);
    const courseString = updatedCourses.reduce((acc, course, index) => {
      acc += course;
      if (index !== updatedCourses.length - 1 && (index + 1) % 3 === 0) {
        acc += ",";
      }
      return acc;
    }, "");

    setFormData({
      ...formData,
      course: courseString,
    });

    dispatch(setSelectedCourse(e.target.value));
  };

  const handleFormDataSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(createEmployee(formData, navigate));
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="create-employee-main-container">
        <div className="create-employee-content-container">
          <h3>Create Employee</h3>
          <form
            className="create-employee-form"
            onSubmit={handleFormDataSubmit}
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
                    value={formData.name}
                    onChange={handleFormData}
                    required
                  />
                </span>
                <span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormData}
                    required
                  />
                </span>
                <span>
                  <input
                    name="mobile"
                    type="tel"
                    maxLength="10"
                    value={formData.mobile}
                    onChange={handleFormData}
                    required
                  />
                </span>
                <span>
                  <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleFormData}
                  >
                    <option name="hr" value="HR">
                      HR
                    </option>
                    <option name="manager" value="Manager">
                      Manager
                    </option>
                    <option name="sales" value="Sales">
                      Sales
                    </option>
                  </select>
                </span>
                <span>
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    onChange={handleFormData}
                  />
                  Male
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    onChange={handleFormData}
                  />{" "}
                  Female
                </span>
                <span className="courses-input-field">
                  {courses?.map((course) => (
                    <div key={course}>
                      <input
                        type="checkbox"
                        checked={formData.course.includes(course)}
                        value={course}
                        name={course}
                        onChange={(e) => handleFormDataForCourse(e)}
                      />
                      <label>{course}</label>
                    </div>
                  ))}
                </span>

                <span>
                  <input name="image" type="file" accept=".jpg,.png" />
                </span>
              </div>
            </div>
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
