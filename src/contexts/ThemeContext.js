import React, { createContext, useState, useEffect, useMemo } from 'react';
/* eslint linebreak-style: ["error", "windows"] */
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
  // const Mode = useMemo(() => ({ darkMode, setDarkMode }), []);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}  
    </ThemeContext.Provider>  
  );  
}
export default ThemeContextProvider;
