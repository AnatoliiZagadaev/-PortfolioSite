import React from 'react';
import { useTranslation } from 'react-i18next';
import AutumnForest from '../components/ImegComponent/AutumnForest';
import DuckOnTheWater from '../components/ImegComponent/DuckOnTheWater';
import Dungeon from '../components/ImegComponent/Dungeon';
import BigCity from '../components/ImegComponent/BigCity';
import OceanBeach from '../components/ImegComponent/OceanBeach';
import NationalPark from '../components/ImegComponent/NationalPark';

function Portfolio() {
  const { t } = useTranslation();
  return (
    <section>
      <header id="portfolio"><h1>{t('works')}</h1></header>
      <span className="row_gallery">
        <AutumnForest />
        <span className="space" />
        <DuckOnTheWater />
        <span className="space visible_false" />
        <Dungeon />
      </span>
      <span className="row_gallery">
        <AutumnForest />
        <span className="space" />
        <DuckOnTheWater />
        <span className="space visible_false" />
        <Dungeon />
      </span>
      <span className="row_gallery">
        <AutumnForest />
        <span className="space" />
        <DuckOnTheWater />
        <span className="space visible_false" />
        <Dungeon />
      </span>
      <span className="row_gallery">
        <BigCity />
        <span className="space visible_false" />
        <OceanBeach />
      </span>
      <NationalPark />
    </section>
  ); 
}
export default Portfolio;
