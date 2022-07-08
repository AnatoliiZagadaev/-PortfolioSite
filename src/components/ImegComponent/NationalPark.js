import React from 'react';
import { useTranslation } from 'react-i18next';
import nationalPark from '../../assets/image/7.jpg';
import FotoCommentsLifeCycle from '../Comment/FotoCommentsLifeCycle';

function NationalPark() {
  const { t } = useTranslation();
  return (
    <span className="bloc relative visible_false">
      <img src={nationalPark} alt="National Park" />
      <span className="innerBlock absolute">
        <span className="blocChild">
          <h1>{t('review')}</h1>
          <FotoCommentsLifeCycle />
        </span>
      </span>
    </span>
  );
}
export default NationalPark;
