
import React, { Component } from 'react';
import Photographer from '../image/Photographer.png';
import FocusArrow from '../Components/OnFocusArrow'

export default class About extends Component {
    render(){
        return(
        <section>
            <header id="about"><h1>About Me</h1></header>
            <span className="row_gallery row_about">
                <span><img id="My_photo" src={Photographer} alt="Photographer" height="250" width="380"/></span>
                <span className="text"><p><span className="font_bolt">My name is Julia Jacobson</span></p>
                    <ul>
                      <li>I am a Photographer who likes everything - <br/>
                       nature, people and travel</li>
                      <li>If you like my photos, call or write me.</li>
                      <li>Email: photo.jacobson@jmail.com</li>
                      <li>Phone: +01(111) 333-55-77</li>
                   </ul>
                </span>
                <span className="text">
                   <FocusArrow/>
                </span>
            </span>
        </section>
    )}};
