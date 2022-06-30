import React from 'react';
/* eslint linebreak-style: ["error", "windows"] */
import PropTypes from 'prop-types';
import './Header.css';

function Header({ darkMode, setDarkMode }) {
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
                  <li><a className="link" href="About">About</a></li>
                  <li><a className="link" href="Portfolio">Works</a></li>
                  <li><a className="link" href="Instagramm">Instagramm</a></li>
                  <li><a className="link" href="Personal">Personal details</a></li>
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
                </div>
              </nav>
            </span>
      
          </span>
        </header>
      </div>
    </div>
  );
}

export default Header;
