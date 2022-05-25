import React from "react";
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
    this.addHandler = this.addHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeSurenane = this.handleChangeSurenane.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeGender =this.handleChangeGender.bind(this);
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

  addHandler() {
    this.props.add({ ...this.state.item, id: idGenerator.next() });
    this.setState({ isOpen: false, item:{ firstName:'', surname:'', age:' ', gender:''} });
  }

  saveHandler() {
    this.props.save(this.state.item);
    this.setState({ isOpen: false, item:{ firstName:'', surname:'', age:' ', gender:''} });
  }

  handleChangeFirstName(event) {
    this.setState({item: {...this.state.item, firstName: event.target.value}});
 }
 handleChangeSurenane(event){
    this.setState({item: {...this.state.item, surname: event.target.value}});
    }
    handleChangeGender(event){
    this.setState({item: {...this.state.item, gender:event.target.value}});
    }
    handleChangeAge(event){
    this.setState({item: {...this.state.item,age:event.target.value}});
    }
  render() {
    return (
      <React.Fragment>
        <button className="actionBtn"
        style={{ left: "40%", position: "relative" }}
         onClick={() => this.setState({ isOpen: true })}>
          Add Person
        </button>

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
                <button className="actionBtn" onClick={this.saveHandler}>Save</button>
              )}
                </span>
        </section> 
        )}
      </React.Fragment>
    );
  }
}
