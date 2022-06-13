import React, { useState } from "react";
import Tables from '../Components/PersonalTaletView';
import Modal from '../Components/FormPersonal.js';


 function DataPersonl(){ 
    
        const [DataPerson, setDataPerson] = useState([
            {
              firstName:'Анатолій',
               surname:'Загадаєв', 
               age:'32',
                gender:'male',
                id: 1
            },
            {
              firstName:'Анатолій',
               surname:'Загадаєв', 
               age:'36 ',
                gender:'male',
                id: 2
            },
            {
              
              firstName:'Анатолій',
               surname:'Загадаєв', 
               age:'30 ',
                gender:'male',
                id: 3
            }
          ]);
        
          //DataPerson.sort((a, b) => (a.age > b.age) ? 1 : -1)
          //DataPerson.reverse()
            console.log(DataPerson)
        
          const [editDataPerson] = useState(null);
          function deleteDataPerson(dataperson) {
            setDataPerson(DataPerson.filter((p) => p !== dataperson));
          }
        
          const addDataPerson = (dataperson) => {
            setDataPerson([...DataPerson, dataperson]);
          };
        
          const saveDataPerson = (dataperson) => {
            setDataPerson(
              DataPerson.reduce((acc, p) => {
                if (p.id === dataperson.id) acc.push(dataperson);
                else acc.push(p);
                return acc;
              }, [])
            );
          };
          const sortDataPerson = () => {
            const sorted = [...this.state.DataPerson]
            sorted.sort((a, b) =>( b.age > a.age )? 1 : -1)
            console.log("sorted");
            setDataPerson({DataPerson,sorted})
          }
         
          const handleReverse =()=>{
            const sortedReverse = [...this.state.DataPerson]
            DataPerson.reverse();
            setDataPerson({DataPerson,sortedReverse})
          }
          return(
        <div>
          <Tables DataPerson={DataPerson} delete={deleteDataPerson}/>
          <Modal sorted={sortDataPerson} add={addDataPerson} save={saveDataPerson} sortedReverse={handleReverse} dataperson={editDataPerson}
           />
           <button className="actionBtn" onClick={() => this.sortDataPerson}>sort by age</button>
        </div>
         );
         
}
export default DataPersonl;
