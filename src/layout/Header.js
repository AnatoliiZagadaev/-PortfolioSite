/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';
import { useTranslation } from 'react-i18next';

function Header({ darkMode, setDarkMode }) {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <header className="menu">
          <span className="container">
            <span className="row">
              <span className="logo" />
              <span>
                <span className="font_bolt">Julia Jacobson</span>
                <br />
                {' '}
                The Photographer

              </span>
            </span>
            
            <span className="font_bolt">
              <nav>
                <ul>
                  <Link to="/" className="links"> 
                    {' '}
                    {t('about')}
                    {' '}
                  </Link>
                  <Link to="/Portfolio" className="links">  
                    {' '}
                    {t('portfolio')}
                    {' '}
                  </Link>
                  <Link to="/Instagramm" className="links"> 
                    {' '}
                    {t('instagramm')}
                    {' '}
                  </Link>
                  <Link to="/Personal" className="links"> 
                    {' '}
                    {t('personal')}
                    {' '}
                  </Link>
                  <Link to="/Starswar" className="links"> 
                    {' '}
                    {t('starswar')}
                    {' '}
                  </Link>
                  <Link to="/Products" className="links"> 
                    {' '}
                    {t('products')}
                    {' '}
                  </Link>
                </ul>
                <div className="toggle-container">
                  <span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀︎</span>
                  <span className="toggle">
                    <input
                      checked={darkMode}
                      onChange={() => setDarkMode((prevMode) => !prevMode)}
                      type="checkbox"
                      className="checkbox"
                      id="checkbox"
                    />
                    <label htmlFor="checkbox" />
                  </span>
                  <span style={{ color: darkMode ? '#9c27b0' : 'grey' }}>☽</span>
                  <button onClick={() => i18n.changeLanguage('ua')}>ua</button>
                  <button onClick={() => i18n.changeLanguage('en')}>en</button>
                  <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
                </div>
                
              </nav>
            </span>
      
          </span>
        </header>
      </div>
    </div>
  );
}
Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
};

export default Header;
