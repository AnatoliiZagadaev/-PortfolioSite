
import React, { Component } from 'react';
import Photographer from '../image/Photographer.png';
import FocusArrow from '../Components/OnFocusArrow';
import DragAndDrop from '../Components/DragAndDrop';
import LoadAndError from '../Components/LoadAndError';

export default class About extends Component {
    render(){
        return(
        <section>
            <header id="about"><h1>About Me</h1></header>
            <span className="row_gallery row_about">
                <span> <LoadAndError photographer={Photographer} /> </span>
                <span className="text"><p><span className="font_bolt">My name is Julia Jacobson</span></p>
                    <ul>
                     <DragAndDrop/>
                   </ul>
                </span>
                <span className="text">
                   <FocusArrow/>
                </span>
            </span>
        </section>
    )}};
