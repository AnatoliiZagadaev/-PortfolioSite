import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Form.css';

function Tables(props) {
  const { DataPerson, _delete } = props;
  const { t } = useTranslation();
  return (
    <div>
      <table> 
        <tbody>
          <tr>
            <td>{t('firstName')}</td>
            <td>{t('surname')}</td>
            <td>{t('gender')}</td>
            <td>{t('age')}</td>
            <td>{t('delete')}</td>
          </tr>
          {DataPerson.map((item) => (
            <tr key={item.id}>
              <td>
                {item.firstName}
              </td>
              <td>{item.surname}</td>
              <td>
                {item.gender}
              </td>
              <td>{item.age}</td>
              <td>
                <button
                  className="actionBtn"
                  onClick={() => { _delete(item); }}
                >
                  {' '}
                  {t('delete')}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
Tables.propTypes = {
  DataPerson: PropTypes.array.isRequired,
  _delete: PropTypes.func.isRequired
};
export default Tables;
