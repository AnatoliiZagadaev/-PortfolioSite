/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './StarWors';

function TablesStarsWar(props) {
  const { Starswars } = props;
 
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('starWars')}</h1>
      <table>
        <tbody>
          <tr>
            <td>{t('starWarsName')}</td>
            <td>{t('height')}</td>
            <td>{t('eye')}</td>
          </tr>
          {Starswars.map(({ name, height, eye_color }) => (
            <tr key={name}>
              <td>
                {name}
                {' '}
              </td>
              <td>
                {height}
                {' '}
              </td>
              <td>{eye_color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}
TablesStarsWar.propTypes = {
  Starswars: PropTypes.array.isRequired
};
export default TablesStarsWar;
