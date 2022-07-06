import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <section>
        <span className="container">
          <p>{t('copyright')}</p>
        </span>
        <span className="autor">
          <p>{t('created')}</p>
          <a href="https://github.com/AnatoliiZagadaev">https://github.com/AnatoliiZagadaev</a>
        </span>
      </section>
    </footer>
  );
}
export default Footer;
