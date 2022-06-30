import React from 'react';
/* eslint linebreak-style: ["error", "windows"] */
import oceanBeach from '../../assets/image/5.jpg';

function OceanBeach() {
  return (
    <span className="bloc relative visible_false" data-descr="Kitchen design">
      <img src={oceanBeach} alt="Ocean beach" />
      <span className="innerBlock absolute">
        <span className="blocChild">
          <h1>Ocean beach</h1>
          <p>Some text that describes the current photo</p>
        </span>
      </span>
    </span>
  );
}
export default OceanBeach;
