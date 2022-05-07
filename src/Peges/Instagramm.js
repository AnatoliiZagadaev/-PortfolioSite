import './App.css';
import tangerineAndChocolate from '../Peges/8.jpg';
import manOnTheStone from '../Peges/9.jpg';
import youngGirl from '../Peges/11.jpg';
import pieceOfPie from '../Peges/12.jpg';
import theTablet from '../Peges/13.jpg';
import volleyball from '../Peges/14.jpg';
import search from '../Peges/154836.png';
import { Component } from "react";
export default class Instagramm extends Component {
    render(){
        return(
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
)}};