import React from 'react';
/* eslint linebreak-style: ["error", "windows"] */
import Photographer from '../assets/image/Photographer.png';
import FocusArrow from '../components/OnFocusArrow';
import DragAndDrop from '../components/DragAndDrop';
import LoadAndError from '../components/LoadAndError';

function About() {
  return (
    <section>
      <header id="about"><h1>About Me</h1></header>
      <span className="row_gallery row_about">
        <span> 
          {' '}
          <LoadAndError photographer={Photographer} />
          {' '}
        </span>
        <span className="text">
          <p><span className="font_bolt">My name is Julia Jacobson</span></p>
          <ul>
            <DragAndDrop />
          </ul>
        </span>
        <span className="text">
          <FocusArrow />
        </span>
      </span>
    </section>
  ); 
}
export default About;
