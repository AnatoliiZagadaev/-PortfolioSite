
import React from 'react';

import '../Form.css';


export default class Personal extends React.Component{
  
  constructor(props){
    super(props);
    this.state = { Person:{
      id:'0',
      name:{ 
      firstName:'',
      surname:''
      },
      age:'' ,
      gender:''
       } ,     
      

  handleChangeFirstName : (event) => {
    this.setState(({Person}) => ({Person: {...Person, firstName: event.target.value}}));
  },
  handleChangeSurenane : (event) => {
    this.setState(({Person}) => ({Person: {...Person, surname: event.target.value}}));
  },
  handleChangeGender :(event) => {
    this.setState(({Person}) => ({Person: {...Person, gender: event.target.value}}));
  },
  handleChangeAge:(event)=>{
    this.setState(({Person}) => ({Person: {...Person, age: event.target.value}}));
  },

  handleSubmit:(event)=> {
    this.setState(this.state.value);
    event.preventDefault();
  },
   
render(){
  return (
    <>
    <section>
    <header id="Personal details"><h1>Personal details</h1></header>
           <span className="containerForm">
            <form  onSubmit={this.handleSubmit}  action="#" method="post" id="regform" name="regform"/>
               
                <span className="block">
                    <h2>Personal details</h2>
                    <span className="wrapper">
                        <input type="text" value={this.state.Person.firstName} id="firstname" name="firstname" placeholder="Name" onChange={this.handleChangeFirstName} />
                        <input type="text" value={this.state.Person.surname} id="surname" name="surname" placeholder="Surname" onChange={this.handleChangeSurenane} />
                         <br/>
                    </span>
                    <span className="wrapper">
                        <select id="gender">
                            <option value={this.state.Person.gender} onChange={this.handleChangeGender}>--Gender--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input type="number" id="birthdate" name="birthdate" value={this.state.Person.age} onChange={this.handleChangeAge} />
                    </span>
                    <span className="wrapper">
                        <input type="submit" className="button" value="submit"/>
                    </span>
                </span>
            <form/>
            </span>
            <div >
            <this.Person/>
           </div>
    </section>
    </>
  );
}}}}
