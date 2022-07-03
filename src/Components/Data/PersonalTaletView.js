import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

function Tables(props) {
  const { DataPerson, _deleteP } = props;
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
                  onClick={() => { _deleteP(item); }}
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
Tables.propTypes = {
  DataPerson: PropTypes.isRequired,
  _deleteP: PropTypes.isRequired
};

export default Tables;
