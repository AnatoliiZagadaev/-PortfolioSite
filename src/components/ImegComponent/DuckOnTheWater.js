import React from 'react';
import { useTranslation } from 'react-i18next';
import duckOnTheWater from '../../assets/image/2.jpg';
import FotoComments from '../Comment/FotoComments';

function DuckOnTheWater() {
  const { t } = useTranslation();
  return (
    <span className="bloc relative">
      <img src={duckOnTheWater} alt=" Duck On The Water" />
      <span className="innerBlock absolute"> 
        <span className="blocChild"> 
          <h1>{t('review')}</h1> 
          <FotoComments />
        </span> 
      </span>
    </span>
  );
}
export default DuckOnTheWater;
