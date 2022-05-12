import React,{Component} from "react";
import '../Form.css'



export default class Personal extends Component{ 


        constructor(props) {
          super(props);
          this.state = {   Person:{
            id:'0',
            name:{ 
            firstName:'',
            surname:''
            },
            age:'' ,
            gender:''
             }};         
        
      
          this.Person.name.firstName = this.handleChangeFirstName.bind(this);
          this.Person.name.surname = this.handleChangeSurenane.bind(this);
          this.Person.age = this.handleChangeAge.bind(this);
          this.Person.gender =this.handleChangeGender.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChangeFirstName(event) {
          this.Person.firstName.setState({value: event.target.value});
        }
        handleChangeSurenane(event){
            this.Person.surname.setState({value: event.target.value});
        }
        handleChangeGender(event){
            this.Person.gender.setState({volue:event.target.value})
        }
        handleChangeAge(event){
            this.Person.age.setState({volue:event.target.value})
        }
        handleSubmit(event) {
          this.setState(this.state.value);
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
                        <input type="text" value={this.Person.firstName} id="firstname" name="firstname" placeholder="Name"  onChange={this.handleChangeFirstName}/>
                        <input type="text" value={this.Person.surname} id="surname" name="surname" placeholder="Surname"  onChange={this.handleChangeSurenane}/>
                         <br/>
                    </span>
                    <span className="wrapper">
                        <select id="gender">
                            <option value={this.Person.gender}  onChange={this.handleChangeGender}>--Gender--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input type="number" id="birthdate" name="birthdate" value={this.Person.age} onChange={this.handleChangeAge} />
                    </span>
                    <span className="wrapper">
                        <input type="submit" className="button" value="submit"/>
                    </span>
                </span>
            <form/>
            <hr/>
            <ul>
                    {this.state.Person.slice(0,5).map((item,index)=><li key={index.toString()}>{item}</li>)}
            </ul>
        </span>  
        </section>  
        )
    }

};