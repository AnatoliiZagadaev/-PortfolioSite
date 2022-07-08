import React from 'react';
import { useTranslation } from 'react-i18next';
import dungeon from '../../assets/image/3.jpg';

function Dungeon() {
  const { t } = useTranslation();
  return (
    <span className="bloc relative visible_false">
      <img src={dungeon} alt="The dungeon" />
      <span className="innerBlock absolute">
        <span className="blocChild">
          <h1>{t('dungeon')}</h1>
          <p>{t('someText')}</p>
        </span>
      </span>
    </span>
  );
}
export default Dungeon;
