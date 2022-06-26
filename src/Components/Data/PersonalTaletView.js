import React from 'react';
/* eslint linebreak-style: ["error", "windows"] */
import './Form.css';

function Tables(props) {
  const { DataPerson } = props;
  const { deleteP } = props;
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
          {DataPerson.map((item) => (
            <tr key={item.id}>
              <td>
                {item.firstName}
              </td>
              <td>{item.surname}</td>
              <td>
                {item.gender}
              </td>
              <td>{item.age}</td>
              <td>
                <button
                  className="actionBtn"
                  onClick={() => { deleteP(item); }}
                >
                  {' '}
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
