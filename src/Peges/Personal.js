import React from 'react';
import EditableTable from "../Components/TebletOfRerconal.js";
import '../Form.css';
function App() {
  const columns = [
    { field: 'id', fieldName: '#' },
    { field: 'firstName', fieldName: 'First Name' },
    { field: 'lastName', fieldName: 'Last Name' },
    { field: 'role', fieldName: 'User\'s role' },
  ];

  const data = [
    { id: 1, firstName: 'John', lastName: 'Doe', role: 'Admin' },
    { id: 2, firstName: 'John', lastName: 'Smith', role: 'Editor'},
    { id: 3, firstName: 'ohn', lastName: 'mith', role: 'Editor'}
  ];

  return (
    <>
    <section>
    <header id="Personal details"><h1>Personal details</h1></header>
           <span className="containerForm">
            <form   action="#" method="post" id="regform" name="regform"/>
               
                <span className="block">
                    <h2>Personal details</h2>
                    <span className="wrapper">
                        <input type="text" value="" id="firstname" name="firstname" placeholder="Name"  />
                        <input type="text" value="" id="surname" name="surname" placeholder="Surname"  />
                         <br/>
                    </span>
                    <span className="wrapper">
                        <select id="gender">
                            <option value="">--Gender--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input type="number" id="birthdate" name="birthdate"  />
                    </span>
                    <span className="wrapper">
                        <input type="submit" className="button" value="submit"/>
                    </span>
                </span>
            <form/>
            </span>
      <EditableTable columns={columns} rows={data} actions />
    </section>
    </>
  );
}

export default App;
