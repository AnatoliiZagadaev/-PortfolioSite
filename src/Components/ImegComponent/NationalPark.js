import React from 'react';
/* eslint linebreak-style: ["error", "windows"] */
import nationalPark from '../../assets/image/7.jpg';
import FotoCommentsLifeCycle from '../Comment/FotoCommentsLifeCycle';

function NationalPark() {
  return (
    <span className="bloc relative visible_false">
      <img src={nationalPark} alt="National Park" />
      <span className="innerBlock absolute">
        <span className="blocChild">
          <h1>Leave a review</h1>
          <FotoCommentsLifeCycle />
        </span>
      </span>
    </span>
  );
}
export default NationalPark;
