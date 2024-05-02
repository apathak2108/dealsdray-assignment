import React, { useState, useEffect } from "react";
import EditIcon from "../../images/editIcon.png";
import DeleteIcon from "../../images/deleteIcon.png";
import "./GetEmployeeListTable.css";
import { setEditIndex } from "../../redux/action/updateEmployeeAction";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmployees,
  deleteEmployee,
} from "../../redux/action/fetchEmployeesAction";
import { useNavigate } from "react-router-dom";
import EmptyTable from "../emptyTable";

const GetEmployeeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state?.employees?.employees);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    if (employees.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [employees]);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleEditAction = (id) => {
    dispatch(setEditIndex(id));
    navigate("/dashboard/edit-employee");
  };

  const handleDeleteAction = (id) => {
    dispatch(deleteEmployee(id));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      {isEmpty && <EmptyTable />}
      {!isEmpty && (
        <table border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Create Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={employee.image}
                    alt="temp_image"
                    style={{ height: "87px" }}
                  />
                </td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.mobile}</td>
                <td>{employee.designation}</td>
                <td>{employee.gender}</td>
                <td>{employee.course}</td>
                <td>{formatDate(employee.createDate)}</td>
                <td className="table-data-icons">
                  <img
                    src={EditIcon}
                    alt="edit-icon"
                    className="edit-icon"
                    onClick={() => handleEditAction(employee._id)}
                  />
                  <img
                    src={DeleteIcon}
                    alt="delete-icon"
                    className="delete-icon"
                    onClick={() => handleDeleteAction(employee._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default GetEmployeeList;
