import React from 'react';
import './App.css';
import Photographer from './Peges/Photographer.png';
import autumnForest from './Peges/1.jpg';
import duckOnTheWater from './Peges/2.jpg';
import dungeon from './Peges/4.jpg';
import bigCity from './Peges/4.jpg';
import oceanBeach from './Peges/5.jpg';
import nationalPark from './Peges/7.jpg';
import tangerineAndChocolate from './Peges/8.jpg';
import manOnTheStone from './Peges/9.jpg';
import youngGirl from './Peges/11.jpg';
import pieceOfPie from './Peges/12.jpg';
import theTablet from './Peges/13.jpg';
import volleyball from './Peges/14.jpg';
import search from './Peges/154836.png';
import FotoComments from './FotoComents';

function App() {
  return (
    <div className="App">
    <header className="menu">
        <span className="container">
            <span className="row">        
                <span className="logo"></span>
                <span>
                    <span className="font_bolt">Julia Jacobson</span>
                    <br/> The Photographer</span>
            </span>
            <span className="font_bolt">
                <nav>
                    <ul>
                        <li><a className="link" href="#about">About</a></li>
                        <li><a className="link" href="#portfolio">Works</a></li>
                        <li><a className="link" href="#instagramm">Instagramm</a></li>
                    </ul>
                </nav>
            </span>
        </span>
    </header>
    <main>
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
        <section>
        <header id="portfolio"><h1>My Last Works</h1></header>
        <span className="row_gallery">
            <span className="bloc relative">
                <img src={autumnForest} alt=" Autumn Forest"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                        <h1>Leave a review</h1> 
                        <FotoComments/>
                    </span>
                </span>
                
            </span>
            <span className="space"></span>
            <span className="bloc relative">
                <img src={duckOnTheWater} alt="Duck on the water"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                    <h1>Leave a review</h1> 
                        <FotoComments/>
                    </span> 
                </span>
            </span>
            <span className="space visible_false"></span>
            <span className="bloc relative visible_false">
                <img src={dungeon} alt="The dungeon"/>
                <span className="innerBlock absolute"> 
                    <span className="blocChild"> 
                    <h1>Leave a review</h1> 
                        <FotoComments/>
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
<section>
 <header id="instagramm">
     <h1>Follow me on Instagram</h1>
 </header>
 <span className="row_gallery">
     <span className="bloc relative">
         <img src={tangerineAndChocolate} alt="Tangerine And Chocolate"/>
         <span className="innerBlockGallery absolute"> 
             <span className="blocChild"> 
                 <img src={search} alt="Search"/> 
             </span> 
         </span>
     </span>
     <span className="space"></span>
     <span className="bloc relative">
         <img src={manOnTheStone} alt=" Man on the stone"/>
         <span className="innerBlockGallery absolute"> 
             <span className="blocChild"> 
                 <img src={search} alt="Search"/> 
             </span> 
         </span>
     </span>
     <span className="space"></span>
     <span className="bloc relative">
         <img src={youngGirl} alt="Young girl"/>
         <span className="innerBlockGallery absolute"> 
             <span className="blocChild"> 
                 <img src={search} alt="Search"/> 
             </span> 
         </span>
     </span>
     <span className="space"></span>
     <span className="bloc relative">
         <img src={pieceOfPie} alt="Piece of pie"/>
         <span className="innerBlockGallery absolute"> 
             <span className="blocChild"> 
                 <img src={search} alt="Search"/> 
             </span> 
         </span>
     </span>
     <span className="space visible_false"></span>
     <span className="bloc relative visible_false">
         <img src={theTablet} alt="The tablet"/>
         <span className="innerBlockGallery absolute"> 
             <span className="blocChild"> 
                 <img src={search} alt="Search"/> 
             </span> 
         </span>
     </span>
     <span className="space visible_false"></span>
     <span className="bloc relative visible_false"
     ><img src={volleyball} alt="Volleyball"/>
         <span className="innerBlockGallery absolute"> 
             <span className="blocChild"> 
                 <img src={search} alt="Search"/>  
             </span> 
         </span>
     </span>
 </span>
</section>
       
    </main>
    <footer>
        <span className="container">
            <p>© Copyright 2018-2020 Julia Jacobson</p>
        </span>
            <span className="autor">
                <p>Created by Anatoliy Zagadaev</p>
                <a href="https://github.com/AnatoliiZagadaev">https://github.com/AnatoliiZagadaev</a>
            </span>
    </footer>
    </div>
  );
}

export default App;
