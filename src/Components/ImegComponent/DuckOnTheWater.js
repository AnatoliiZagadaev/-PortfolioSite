import React from 'react';
/* eslint linebreak-style: ["error", "windows"] */
import duckOnTheWater from '../../assets/image/2.jpg';
import FotoComments from '../Comment/FotoComments';

function DuckOnTheWater() {
  return (
    <span className="bloc relative">
      <img src={duckOnTheWater} alt=" Duck On The Water" />
      <span className="innerBlock absolute"> 
        <span className="blocChild"> 
          <h1>Leave a review</h1> 
          <FotoComments />
        </span> 
      </span>
    </span>
  );
}
export default DuckOnTheWater;
