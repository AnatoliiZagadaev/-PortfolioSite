import './App.css';

import autumnForest from '../Peges/1.jpg';
import duckOnTheWater from '../Peges/2.jpg';
import dungeon from '../Peges/4.jpg';
import bigCity from '../Peges/4.jpg';
import oceanBeach from '../Peges/5.jpg';
import nationalPark from '../Peges/7.jpg';
import { Component } from "react";

export default class Portfolio extends Component {
    render(){
        return(
        <section>
        <header id="portfolio"><h1>My Last Works</h1></header>
        <span className="row_gallery">
            <span className="bloc relative">
                <img src={autumnForest} alt=" Autumn Forest"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>Autumn forest</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
            <span className="space"></span>
            <span className="bloc relative">
                <img src={duckOnTheWater} alt="Duck on the water"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>Duck on the water</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
            <span className="space visible_false"></span>
            <span className="bloc relative visible_false">
                <img src={dungeon} alt="The dungeon"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>The dungeon</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
        </span>
        <span className="row_gallery">
            <span className="bloc relative">
                <img src={autumnForest} alt="Autumn forest"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>Autumn forest</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
            <span className="space"></span>
            <span className="bloc relative">
                <img src={duckOnTheWater} alt="Duck on the water"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>Duck on the water</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
            <span className="space visible_false"></span>
            <span className="bloc relative visible_false">
                <img src={dungeon} alt="The dungeon"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>The dungeon</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
        </span>
        <span className="row_gallery">
            <span className="bloc relative">
                <img src={autumnForest} alt="Autumn forest"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>Autumn forest</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
            <span className="space"></span>
            <span className="bloc relative">
                <img src={duckOnTheWater} alt="Duck on the water"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>Duck on the water</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
            <span className="space visible_false"></span>
            <span className="bloc relative visible_false">
                <img src={dungeon} alt="The dungeon"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>The dungeon</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
        </span>
        <span className="row_gallery">
            <span className="bloc relative">
                <img src={autumnForest} alt="Autumn forest"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>Autumn forest</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
            <span className="space"></span>
            <span className="bloc relative">
                <img src={duckOnTheWater} alt="Duck on the water"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>Duck on the water</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
            <span className="space visible_false"></span>
            <span className="bloc relative visible_false">
                <img src={dungeon} alt="The dungeon"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>The dungeon</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
        </span>
        <span className="row_gallery">
            <span className="bloc relative">
                <img src={bigCity} alt="Big city"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>Big city</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
            <span className="space visible_false"></span>
            <span className="bloc relative visible_false" data-descr="Kitchen design">
                <img src={oceanBeach} alt="Ocean beach"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>Ocean beach</h1> 
                        <p>Some text that describes the current photo</p> 
                    </span> 
                </span>
            </span>
        </span>
        <span className="bloc relative visible_false">
            <img src={nationalPark} alt="National Park"/>
            <span className="innerBlock absolute"> 
                <span className="blocChild"> 
                    <h1>National Park</h1> 
                    <p>Some text that describes the current photo</p> 
                </span> 
            </span>
    </span>
</section>
)}};