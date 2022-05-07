
import { Component } from 'react';
import Photographer from '../Peges/Photographer.png';

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
                    <ul>
                        <li>200+ happy clients</li>
                        <li>120 portrait shoots</li>
                        <li>600+ nature shoots</li>
                        <li>1000+ wedding shats</li>
                        <li>12 countries visited</li>
                        <li>600+ coffe drinket</li>
                    </ul>
                </span>
            </span>
        </section>
    )}};
