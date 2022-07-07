/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
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
    
    node.addEventListener('keydown', (event) => {
      const active = document.activeElement; 
      if (event.keyCode === 40 && active.nextSibling) {
        active.nextSibling.focus();
      }
      if (event.keyCode === 38 && active.previousSibling) {
        active.previousSibling.focus();
      }
    });
  }
    
  render() {
    return (
      <ul ref={this.myRef}>
        <li className="activeMove" tabIndex={0}>200+ happy clients</li>
        <li className="activeMove" tabIndex={1}>120 portrait shoots</li>
        <li className="activeMove" tabIndex={2}>600+ nature shoots</li>
        <li className="activeMove" tabIndex={3}>1000+ wedding shats</li>
        <li className="activeMove" tabIndex={4}>12 countries visited</li>
        <li className="activeMove" tabIndex={5}>600+ coffe drinket</li>
      </ul>
    );
  }
}
