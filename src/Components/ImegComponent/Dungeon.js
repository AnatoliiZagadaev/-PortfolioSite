import React from 'react';
/* eslint linebreak-style: ["error", "windows"] */
import dungeon from '../../assets/image/3.jpg';

function Dungeon() {
  return (
    <span className="bloc relative visible_false">
      <img src={dungeon} alt="The dungeon" />
      <span className="innerBlock absolute">
        <span className="blocChild">
          <h1>The dungeon</h1>
          <p>Some text that describes the current photo</p>
        </span>
      </span>
    </span>
  );
}
export default Dungeon;
