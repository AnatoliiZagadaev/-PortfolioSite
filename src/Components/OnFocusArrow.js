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
    const activeMove = document.getElementsByClassName('activeMove');
    const actives = document.getElementsByClassName('active');

    node.addEventListener('keydown', (event) => {
      const active = document.activeElement;
      if (event.keyCode === 40 && active.nextSibling) {
        active.nextSibling.focus();
      }
      if (event.keyCode === 38 && active.previousSibling) {
        active.previousSibling.focus();
      }
      
      for (let i = 0; activeMove.length > i; i++) {
        activeMove[i].onclick = function () {
          const currentActive = actives[0];
          if (currentActive) { currentActive.classList.remove('active'); }
          if (currentActive !== this) { this.classList.add('active'); }
        }; 
      }
    });
  }
    
  render() {
    return (
      <ul ref={this.myRef}>
        <li className="activeMove" tabIndex="0">200+ happy clients</li>
        <li className="activeMove" tabIndex="1">120 portrait shoots</li>
        <li className="activeMove" tabIndex="2">600+ nature shoots</li>
        <li className="activeMove" tabIndex="3">1000+ wedding shats</li>
        <li className="activeMove" tabIndex="4">12 countries visited</li>
        <li className="activeMove" tabIndex="5">600+ coffe drinket</li>
      </ul>
    );
  }
}
