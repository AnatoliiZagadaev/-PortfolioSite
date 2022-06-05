import React from 'react';



export default class FocusArrow extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    componentDidMount() {
      this.moveFocus();
    }
    moveFocus() {
      const node = this.myRef.current;
      node.addEventListener('keydown', function(event) {
        const active = document.activeElement;
        if(event.keyCode === 40 && active.nextSibling) {
          active.nextSibling.focus();
        }
        if(event.keyCode === 38 && active.previousSibling) {
          active.previousSibling.focus();
        }
      });
    }
   
    render() {
      return (
        <React.Fragment>
        <ul ref={this.myRef} >
         <li tabIndex="0">200+ happy clients</li>
         <li tabIndex="1">120 portrait shoots</li>
         <li tabIndex="2">600+ nature shoots</li>
         <li tabIndex="3">1000+ wedding shats</li>
         <li tabIndex="4">12 countries visited</li>
         <li tabIndex="5">600+ coffe drinket</li>
     </ul>
     </React.Fragment>
      )
    }
  }
  
  
  