import React from "react";
//import PropTypes from 'prop-types';

import '../Components/Form.css';

class idGenerator {
  static id = 3;
  static next() {
    return ++this.id;
  }
}

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: !!props.person,
      item: props.person ? { ...props.person } :{ firstName:'', surname:'', age:' ', gender:''}
    };
  }

  componentDidUpdate(prevProp) {
    if (prevProp.person !== this.props.person) {
      this.setState({
        isOpen: !!this.props.person,
        item: this.props.person
          ? { ...this.props.person }
          : { firstName:'', surname:'', age:' ', gender:''}
      });
    }
  }

  addHandler=()=>{
    this.props.add({ ...this.state.item, id: idGenerator.next() });
    this.setState({ isOpen: false, item:{ firstName:'', surname:'', age:' ', gender:''} });
  }
  saveHandler=()=>{
    this.props.save(this.state.item);
    this.setState({ isOpen: false, item:{ firstName:'', surname:'', age:' ', gender:''} });
  }
  handleSort=()=>{
    this.props.sorted(this.item)
    this.setState(this.props.sorted)
  }
  handleReverse=()=>{
    this.props.sortedReverse(this.props.item)
    this.setState(this.props.item)
  }
  handleChangeFirstName=(event)=>{
    this.setState({item: {...this.state.item, firstName: event.target.value}});
 }
 handleChangeSurenane=(event)=>{
    this.setState({item: {...this.state.item, surname: event.target.value}});
    }
    handleChangeGender=(event)=>{
    this.setState({item: {...this.state.item, gender:event.target.value}});
    }
    handleChangeAge=(event)=>{
    this.setState({item: {...this.state.item,age:event.target.value}});
    }
    //<button className="actionBtn"onClick={() => this.handleSort}>sort by age</button>
  render() {
    console.log('sorted', this.props.sorted)
    console.log('item', this.state.item)
    console.log('person', this.person)
    return(
      <React.Fragment>
      <div className="conteinerBtn">
      <button className="actionBtn"onClick={() => this.setState({ isOpen: true })}>Add Person</button>
      
      <button className="actionBtn"onClick={() => this.handleReverse}>Reverse</button>
    </div>
      {this.state.isOpen && (
        <section>      
         <span className="containerForm">
         <header id="Personal details"><h2>Personal details</h2></header>
         <span className="wrapper">
            <input ref={this.nameInput}onChange={this.handleChangeFirstName}
            value={this.state.item.firstName}type="text"  id="firstname" name="firstname"/>
            <input ref={this.sunameInput} onChange={this.handleChangeSurenane}
             value={this.state.item.surname} type="text" id="surname" name="surname"/>
            <br/>
        </span>
        <span className="wrapper">
            <select ref={this.genderInput} value={this.state.item.gender} onChange={this.handleChangeGender} id="gender">
                <option >--Gender--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input ref={this.ageInput} type="number" value={this.state.item.age} id="birthdate"
             name="birthdate" placeholder="Age"onChange={this.handleChangeAge}/>
             </span>
            {!this.state.item.id && (
              <button className="actionBtn" onClick={this.addHandler}>Add</button>
            )}
             {this.state.item.id && (
              <button className="actionBtn" onClick={this.saveHandler}>Add</button>
            )}
              </span>
      </section> 
      )}
    </React.Fragment>
    );
  }
}