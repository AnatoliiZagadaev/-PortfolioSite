import React from 'react';
import { useTranslation } from 'react-i18next';
import bigCity from '../../assets/image/4.jpg';

function BigCity() {
  const { t } = useTranslation();
  return (
    <span className="bloc relative">
      <img src={bigCity} alt="Big city" />
      <span className="innerBlock absolute">
        <span className="blocChild">
          <h1>{t('city')}</h1>
          <p>{t('someText')}</p>
        </span>
      </span>
    </span>
  );
}
export default BigCity;
