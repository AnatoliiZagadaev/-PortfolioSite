import React from 'react';
/* eslint linebreak-style: ["error", "windows"] */
import bigCity from '../../assets/image/4.jpg';

function BigCity() {
  return (
    <span className="bloc relative">
      <img src={bigCity} alt="Big city" />
      <span className="innerBlock absolute">
        <span className="blocChild">
          <h1>Big city</h1>
          <p>Some text that describes the current photo</p>
        </span>
      </span>
    </span>
  );
}
export default BigCity;
