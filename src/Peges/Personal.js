import React,{Component} from "react";
import '../Components/Form.css';
import EditableTable from '../Components/TebletOfRerconal';



const columns = [
    { field: 'id', fieldName: '#' },
    { field: 'firstName', fieldName: 'First Name' },
    { field: 'surname', fieldName: 'Surname' },
    { field:'Age', fieldName:'Age'},
    { field: 'Gender', fieldName: 'Gender' },
  ];
  /*const data = [
    { id: 1, firstName: 'John', Surname: 'Doe',Age:'45',gender: 'man' },
    { id: 2, firstName: 'John', Surname: 'Smith',Age:'30',gender: 'man'},
    { id: 3, firstName: 'Wohn', Surname: 'mith',Age:'40',gender: 'woman'}
  ];*/
  

export default class Personal extends Component{

    
    constructor(props) {
        super(props);
        this.state = {
          Person:{
            id:'0',
            name:{
              firstName:'',
              surname:'',
              age:' '
            },     
            gender:''
          },
          DataPerson:[]
        };

           this.setState.DataPerson = [
            { id:this.state.Person.id,firstName:this.state.Person.firstName, surname:this.state.Person.surname,
             Age:this.state.Person.age,gender:this.state.Person.gender},
        
        ];
       

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeSurenane = this.handleChangeSurenane.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeGender =this.handleChangeGender.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }
      handleChangeFirstName(event) {
        this.setState(({Person}) => ({Person: {...Person, firstName: event.target.value}}));
    }
    handleChangeSurenane(event){
        this.setState(({Person}) => ({Person: {...Person, surname: event.target.value}}));
    }
    handleChangeGender(event){
        this.setState(({Person}) => ({Person: {...Person, gender:event.target.value}}));
    }
    handleChangeAge(event){
        this.setState(({Person}) => ({Person: {...Person, age:event.target.value}}));
    }
    handleSubmit(event) {
        //this.setState(this.value);
        this.setState(this.DataPerson=[this.state.Person]);
        event.preventDefault();
      }
     

  render(){
      return(
         <section>
        <header id="Personal details"><h1>Personal details</h1></header>
         <span className="containerForm">
          <form  onSubmit={this.handleSubmit} action="#" method="post" id="regform" name="regform"/>

              <span className="block">
                  <h2>Personal details</h2>
                  <span className="wrapper">
                      <input type="text" value={this.state.Person.firstName} id="firstname" name="firstname" placeholder="Name"  onChange={this.handleChangeFirstName}/>
                      <input type="text" value={this.state.Person.surname} id="surname" name="surname" placeholder="Surname"  onChange={this.handleChangeSurenane}/>
                       <br/>
                  </span>
                  <span className="wrapper">
                      <select id="gender">
                          <option value={this.state.Person.gender}  onChange={this.handleChangeGender}>--Gender--</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                      </select>
                      <input type="number" value={this.state.Person.age} id="birthdate" name="birthdate" placeholder="Age"  onChange={this.handleChangeAge}/>
                  </span>
                  <span className="wrapper">
                      <input type="submit" className="button" value="submit"/>
                  </span>
              </span>
          <form/>
          <hr/>
      </span>
      <div>
      <EditableTable columns={columns} rows={this.setState.DataPerson} actions />
      </div>
  </section>
  
      
          
  
)        
};
}
