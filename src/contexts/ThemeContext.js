/* eslint-disable consistent-return */
/* eslint linebreak-style: ["error", "windows"] */
import React, {
  createContext, useState, useEffect, useMemo 
} from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  function getPrefColourScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColourScheme();
    if (isReturningUser) {
      return savedMode;
    } if (userPrefersDark) {
      return true;
    } 
    return false;
  }
  const [darkMode, setDarkMode] = useState(getInitialMode);
  
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
    getPrefColourScheme();
  }, [darkMode]);
  const { children } = props;
  const valueDarkMode = useMemo(() => ({
    darkMode, setDarkMode
  }), [darkMode]);
  return (
    <ThemeContext.Provider value={valueDarkMode}>
      {children}  
    </ThemeContext.Provider>  
  );  
}
ThemeContextProvider.propTypes = {
  children: PropTypes.object.isRequired

};
export default ThemeContextProvider;
