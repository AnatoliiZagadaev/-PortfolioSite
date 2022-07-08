/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import TablesStarsWar from './StarWorsView';

function Starswar() {
  const [Starswars, setStarswars] = useState([]);
  
  const getData = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
    setStarswars(data.results);
  };
  useEffect(() => {
    getData();
  }, []);
 
  return (
    <div>
      <TablesStarsWar Starswars={Starswars} />
    </div>  
  );
}       
export default Starswar; 
