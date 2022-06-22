import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
    getPrefColourScheme();
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColourScheme();
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColourScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;