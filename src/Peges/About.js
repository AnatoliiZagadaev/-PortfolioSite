import React from 'react';
import { useTranslation } from 'react-i18next';
import Photographer from '../assets/image/Photographer.png';
import FocusArrow from '../components/OnFocusArrow';
import DragAndDrop from '../components/DragAndDrop';
import LoadAndError from '../components/LoadAndError';

function About() {
  const { t } = useTranslation();

  return (
    <section>
      <header id="about"><h1>{t('aboutMe')}</h1></header>
      <span className="row_gallery row_about">
        <span> 
          {' '}
          <LoadAndError photographer={Photographer} />
          {' '}
        </span>
        <span className="text">

          <p><span className="font_bolt">{t('nema')}</span></p>
          <ul>
            <DragAndDrop />
          </ul>
        </span>
        <span className="text">
          <FocusArrow />
        </span>
      </span>
    </section>
  ); 
}
export default About;
