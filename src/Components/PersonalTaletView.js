import React from "react";
import '../Peges/Personal.js';
import '../Components/Form.css';

function Tables(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>Suname</td>
            <td>Gender</td>
            <td>Age</td>
            <td>Delete</td>
          </tr>
          {props.DataPerson.map((item) => (
            <tr key={item.id}>
              <td>{item.firstName} </td>
              <td>{item.surname}</td>
              <td>{item.gender} </td>
              <td>{item.age}</td>
              <td>
                <button className="actionBtn"
                  onClick={() => {
                    props.delete(item);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Tables;