import React from 'react';
import { useTranslation } from 'react-i18next';
import tangerineAndChocolate from '../assets/image/8.jpg';
import manOnTheStone from '../assets/image/9.jpg';
import youngGirl from '../assets/image/11.jpg';
import pieceOfPie from '../assets/image/12.jpg';
import theTablet from '../assets/image/13.jpg';
import volleyball from '../assets/image/14.jpg';
import search from '../assets/image/154836.png';

function Instagramm() {
  const { t } = useTranslation();
  return (
    <section>
      <header id="instagramm">
        <h1>{t('follow')}</h1>
      </header>
      <span className="row_gallery">
        <span className="bloc relative">
          <img src={tangerineAndChocolate} alt="Tangerine And Chocolate" />
          <span className="innerBlockGallery absolute"> 
            <span className="blocChild"> 
              <img src={search} alt="Search" /> 
            </span> 
          </span>
        </span>
        <span className="space" />
        <span className="bloc relative">
          <img src={manOnTheStone} alt=" Man on the stone" />
          <span className="innerBlockGallery absolute"> 
            <span className="blocChild"> 
              <img src={search} alt="Search" /> 
            </span> 
          </span>
        </span>
        <span className="space" />
        <span className="bloc relative">
          <img src={youngGirl} alt="Young girl" />
          <span className="innerBlockGallery absolute"> 
            <span className="blocChild"> 
              <img src={search} alt="Search" /> 
            </span> 
          </span>
        </span>
        <span className="space" />
        <span className="bloc relative">
          <img src={pieceOfPie} alt="Piece of pie" />
          <span className="innerBlockGallery absolute"> 
            <span className="blocChild"> 
              <img src={search} alt="Search" /> 
            </span> 
          </span>
        </span>
        <span className="space visible_false" />
        <span className="bloc relative visible_false">
          <img src={theTablet} alt="The tablet" />
          <span className="innerBlockGallery absolute"> 
            <span className="blocChild"> 
              <img src={search} alt="Search" /> 
            </span> 
          </span>
        </span>
        <span className="space visible_false" />
        <span className="bloc relative visible_false">
          <img src={volleyball} alt="Volleyball" />
          <span className="innerBlockGallery absolute"> 
            <span className="blocChild"> 
              <img src={search} alt="Search" />  
            </span> 
          </span>
        </span>
      </span>
    </section>
  ); 
}
export default Instagramm;
