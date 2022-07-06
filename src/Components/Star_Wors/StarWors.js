import React, { useEffect, useState } from 'react';
import Tables from './StarWorsView';

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
      <Tables Starswars={Starswars} />
    </div>  
  );
}       
export default Starswar; 
