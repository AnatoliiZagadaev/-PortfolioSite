import React from 'react';
import { useTranslation } from 'react-i18next';
import DataPersonl from '../components/Data/DataPersonal';

function Personal() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t('personal')}</h1>
      <DataPersonl />
    </section>
  );
}

export default Personal;
