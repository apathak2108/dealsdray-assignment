import React from "react";
import EditIcon from "../../images/editIcon.png";
import DeleteIcon from "../../images/deleteIcon.png";
import "./GetEmployeeListTable.css";
import Photo from "../../images/photo_prof.jpg";

const GetEmployeeList = () => {
  return (
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
          <tr>
            <td>1</td>
            <td>
              <img src={Photo} className="uploaded-photo" />
            </td>
            <td>Ananya Pathak</td>
            <td>ananyapathak190@gmail.com</td>
            <td>9839249900</td>
            <td>HR</td>
            <td>Male</td>
            <td>BCA</td>
            <td>08:13 PM</td>
            <td className="table-data-icons">
              <img src={EditIcon} alt="edit-icon" className="edit-icon" />
              <img src={DeleteIcon} alt="delete-icon" className="delete-icon" />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img src={Photo} className="uploaded-photo" />
            </td>
            <td>Ananya Pathak</td>
            <td>ananyapathak190@gmail.com</td>
            <td>9839249900</td>
            <td>HR</td>
            <td>Male</td>
            <td>BCA</td>
            <td>08:13 PM</td>
            <td className="table-data-icons">
              <img src={EditIcon} alt="edit-icon" className="edit-icon" />
              <img src={DeleteIcon} alt="delete-icon" className="delete-icon" />
            </td>
          </tr>
        </tbody>
      </table>
  );
};

export default GetEmployeeList;
