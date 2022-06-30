import React from 'react';
/* eslint linebreak-style: ["error", "windows"] */
import autumnForest from '../../assets/image/1.jpg';
import FotoComments from '../Comment/FotoComments';

function AutumnForest() {
  return (
    <span className="bloc relative">
      <img src={autumnForest} alt=" Autumn Forest" />
      <span className="innerBlock absolute"> 
        <span className="blocChild"> 
          <h1>Leave a review</h1> 
          <FotoComments />
        </span> 
      </span>
    </span>
  );
}
export default AutumnForest;
