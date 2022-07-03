// eslint-disable-next-line max-classes-per-file
import React from 'react';
import PropTypes from 'prop-types';

class idGenerator {
  static id = 3;

  static next() {
    this.id = 0;
    return this.id;
  }
}
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: !!props.person,
      item: props.person ? { ...props.person } : {
        firstName: '', surname: '', age: ' ', gender: '' 
      }
    };
  }

  componentDidUpdate(prevProp) {
    const { person } = this.props;
    if (prevProp.person !== person) {
      this.setState({
        isOpen: !!person,
        item: person
          ? { ...person }
          : {
            firstName: '', surname: '', age: ' ', gender: '' 
          }
      });
    }
  }

  addHandler = () => {
    const { item } = this.state;
    const { add } = this.props;
    add({ ...item, id: idGenerator.next() });
    this.setState({ 
      isOpen: false,
      item: {
        firstName: '', surname: '', age: ' ', gender: '' 
      } 
    });
  };

  saveHandler = () => {
    const { item } = this.state;
    const { save } = this.props;
    save(item);
    this.setState({
      isOpen: false,
      item: {
        firstName: '', surname: '', age: ' ', gender: ''
      } 
    });
  };

  handleSort = () => {
    const { item } = this.state;
    this.props.sorted(item);
    this.setState(item);
  };

  handleReverse = () => {
    const { item } = this.state;
    this.props.sortedReverse(item);
    this.setState(item);
  };

  handleChangeFirstName = (event) => {
    const { item } = this.state;
    this.setState({ item: { ...item, firstName: event.target.value } });
  };

  handleChangeSurenane = (event) => {
    const { item } = this.state;
    this.setState({ item: { ...item, surname: event.target.value } });
  };

  handleChangeGender = (event) => {
    const { item } = this.state;
    this.setState({ item: { ...item, gender: event.target.value } });
  };

  handleChangeAge = (event) => {
    const { item } = this.state;
    this.setState({ item: { ...item, age: event.target.value } });
  };

  render() {
    const { item, isOpen } = this.state;
   
    return (
      <>
        <div className="conteinerBtn">
          <button className="actionBtn" onClick={() => this.setState({ isOpen: true })}>Add Person</button>
          <button className="actionBtn" onClick={() => this.sortDataPerson}>sort by age</button>
          <button className="actionBtn" onClick={() => this.handleReverse}>Reverse</button>
        
        </div>
        { isOpen && (
        <section>      
          <span className="containerForm">
            <header id="Personal details"><h2>Personal details</h2></header>
            <span className="wrapper">
              <input
                ref={this.nameInput}
                onChange={this.handleChangeFirstName}
                value={item.firstName}
                type="text"
                id="firstname"
                name="firstname"
              />
              <input
                ref={this.sunameInput}
                onChange={this.handleChangeSurenane}
                value={item.surname}
                type="text"
                id="surname"
                name="surname"
              />
              <br />
            </span>
            <span className="wrapper">
              <select ref={this.genderInput} value={item.gender} onChange={this.handleChangeGender} id="gender">
                <option>--Gender--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                ref={this.ageInput}
                type="number"
                value={item.age}
                id="birthdate"
                name="birthdate"
                placeholder="Age"
                onChange={this.handleChangeAge}
              />
            </span>
            {!item.id && (
            <button className="actionBtn" onClick={this.addHandler}>Add</button>
            )}
            {item.id && (
            <button className="actionBtn" onClick={this.saveHandler}>Add</button>
            )}
          </span>
        </section> 
        )}
      </>
    );
  }
}
Modal.propTypes = {
  person: PropTypes.array.isRequired,
  add: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired


}
export default Modal;
