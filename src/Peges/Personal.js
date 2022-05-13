import React from 'react';
import EditableTable from "../Components/TebletOfRerconal.js";
import '../Form.css';
function App() {
  const columns = [
    { field: 'id', fieldName: '#' },
    { field: 'firstName', fieldName: 'First Name' },
    { field: 'lastName', fieldName: 'Last Name' },
    { field: 'Gender', fieldName: 'Gender' },
    {fild:'Age',fieldName:'Age'}
  ];

  const data = [
    { id: 1, firstName: 'John', lastName: 'Doe', gender: 'Man',Age :'23'},
    { id: 2, firstName: 'Jesica', lastName: 'Smith', gender:'Woman',age:'44'},
    { id: 3, firstName: 'Bob', lastName: 'Dim', gender: 'Man',Age:'34'}
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
            <div >
               <EditableTable columns={columns} rows={data} actions />
           </div>
    </section>
    </>
  );
}

export default App;
