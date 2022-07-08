import React from 'react';
import { useTranslation } from 'react-i18next';
import oceanBeach from '../../assets/image/5.jpg';

function OceanBeach() {
  const { t } = useTranslation();
  return (
    <span className="bloc relative visible_false" data-descr="Kitchen design">
      <img src={oceanBeach} alt="Ocean beach" />
      <span className="innerBlock absolute">
        <span className="blocChild">
          <h1>{t('beach')}</h1>
          <p>{t('someText')}</p>
        </span>
      </span>
    </span>
  );
}
export default OceanBeach;
