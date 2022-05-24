import React , { useState } from "react";
import '../Components/Form.css';
import FormOfPerson from "../Components/FormOfPersonal";
import Tables from "../Components/TebletOfPerconalМiew";

function Personal (){

  const [Products, setProducts] = useState([
    {
      name: "one",
      count: "1",
      id: 1
    },
    {
      name: "two",
      count: "1",
      id: 2
    },
    {
      name: "third",
      count: "2",
      id: 3
    }
  ]);

  const [editProduct, setEditProduct] = useState(null);
  const deleteProduct = (product) => {
    setProducts(Products.filter((p) => p !== product));
  };

  const addProduct = (product) => {
    setProducts([...Products, product]);
  };

  const saveProduct = (product) => {
    setProducts(
      Products.reduce((acc, p) => {
        if (p.id === product.id) acc.push(product);
        else acc.push(p);
        return acc;
      }, [])
    );
  };

  const editProductHandler = (product) => {
    console.log("edit");
    setEditProduct(product);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product</h1>
      <Tables
        Products={Products}
        delete={deleteProduct}
        edit={editProductHandler}
      />
      <FormOfPerson add={addProduct} save={saveProduct} product={editProduct} />
    </div>
  );
  }

export default Personal;
 /*const columns = [
    { field: 'id', fieldName: '#' },
    { field: 'firstName', fieldName: 'First Name' },
    { field: 'surname', fieldName: 'Surname' },
    { field:'Age', fieldName:'Age'},
    { field: 'Gender', fieldName: 'Gender' },
  ];
 const data = [
    { id: 1, firstName: 'John', Surname: 'Doe',Age:'45',gender: 'man' },
    { id: 2, firstName: 'John', Surname: 'Smith',Age:'30',gender: 'man'},
    { id: 3, firstName: 'Wohn', Surname: 'mith',Age:'40',gender: 'woman'}
  ];*/
/*    
    constructor(props) {
        super(props);
        this.state = {
          Person:{
            id:'',
              firstName:'',
              surname:'',
              age:' ',
            gender:''
          },
          DataPerson:[]
        };
       

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
        this.setState(({Person}) => ({Person: {...Person,age:event.target.value}}));
    }
     handleSubmit(event) {
        event.preventDefault();
    this.setState(this.state.Person);
    const DataPerson=[this.state.Person]
    this.setState({DataPerson: DataPerson}) 
    this.state.DataPerson.push(DataPerson);
    
    }
     //console.log( this.state.Person,this.DataPerson)

  render(){
      return(
         <section>
        <header id="Personal details"><h1>Personal details</h1></header>
         <span className="containerForm">
          <form  onSubmit={this.handleSubmit}   action="#" method="post" id="regform" name="regform"/>
 
              <span className="block">
                  <h2>Personal details</h2>
                  <span className="wrapper">
                      <input type="text" value={this.state.Person.firstName} id="firstname" name="firstname" placeholder="Name"  onChange={this.handleChangeFirstName}/>
                      <input type="text" value={this.state.Person.surname} id="surname" name="surname" placeholder="Surname"  onChange={this.handleChangeSurenane}/>
                       <br/>
                  </span>
                  <span className="wrapper">
                      <select value={this.state.Person.gender} onChange={this.handleChangeGender} id="gender">
                          <option >--Gender--</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                      </select>
                      <input type="number" value={this.state.Person.age} id="birthdate" name="birthdate" placeholder="Age"  onChange={this.handleChangeAge}/>
                  </span>
                  <span className="wrapper">
                      <input  onClic={console.log(this.state.DataPerson,this.state.Person)} type="submit" className="button" value="submit"/>
                  </span>
              </span>
          <form/>
          <hr/>
      </span>
      <div>
      <EditableTable columns={columns} rows={this.state.DataPerson} actions />
      </div>
  </section> 
)        
};
}*/
