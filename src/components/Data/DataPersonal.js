/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import Tables from './PersonalTaletView';
import Modal from './FormPersonal';

function DataPersonl() {
  const [DataPerson, setDataPerson] = useState([
    {
      firstName: 'Анатолій',
      surname: 'Загадаєв', 
      age: '32',
      gender: 'male',
      id: 1
    },
    {
      firstName: 'Анатолій',
      surname: 'Загадаєв', 
      age: '36 ',
      gender: 'male',
      id: 2
    },
    {         
      firstName: 'Анатолій',
      surname: 'Загадаєв', 
      age: '30 ',
      gender: 'male',
      id: 3
    }
  ]);  
  // DataPerson.sort((a, b) => (a.age > b.age) ? 1 : -1)
  // DataPerson.reverse()
  // console.log(DataPerson);
  const [editDataPerson] = useState(null);
  function deleteDataPerson(dataperson) {
    setDataPerson(DataPerson.filter((p) => p !== dataperson));
  }    
  const addDataPerson = (dataperson) => {
    setDataPerson((prevDataPerson) => ([...prevDataPerson, dataperson]));
  };    
  /* const saveDataPerson = (dataperson) => {
    setDataPerson(
      DataPerson.reduce((acc, p) => {
        if (p.id === dataperson.id) {
          acc.push(dataperson);
        } else {
          acc.push(p); 
        }
        return acc;
      }, [])
    );
  }; */
  const saveDataPerson = (dataperson) => {
    setDataPerson(
      DataPerson.reduce(
        (acc, p) => ([...acc, p.id === dataperson.id ? dataperson : p]),
        []
      )
    );
  };
  const sortDataPerson = () => {
    const sorted = [...DataPerson];
    sorted.sort((a, b) => (b.age > a.age ? 1 : -1));
    // console.log('sorted');
    setDataPerson({ DataPerson, sorted });
  };
  
  const handleReverse = () => {
    const sortedReverse = [...DataPerson];
    DataPerson.reverse();
    setDataPerson({ DataPerson, sortedReverse });
  };
  return (
    <div>
      <Tables DataPerson={DataPerson} _delete={deleteDataPerson} />
      <Modal
        sorted={sortDataPerson}
        add={addDataPerson}
        save={saveDataPerson}
        sortedReverse={handleReverse}
        dataperson={editDataPerson}
      />
      <div className="conteinerBtn">
        <button className="actionBtn" onClick={() => sortDataPerson()}>sort by age</button>
        <button className="actionBtn" onClick={() => handleReverse()}>Reverse</button>
      </div>
    </div>
  );
}
export default DataPersonl;
