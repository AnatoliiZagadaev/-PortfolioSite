import React from 'react';
import { useTranslation } from 'react-i18next';
import autumnForest from '../../assets/image/1.jpg';
import FotoComments from '../Comment/FotoComments';

function AutumnForest() {
  const { t } = useTranslation();
  return (
    <span className="bloc relative">
      <img src={autumnForest} alt=" Autumn Forest" />
      <span className="innerBlock absolute"> 
        <span className="blocChild"> 
          <h1>{t('review')}</h1> 
          <FotoComments />
        </span> 
      </span>
    </span>
  );
}
export default AutumnForest;
