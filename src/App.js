import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,   
  Route,
  Routes,
} from 'react-router-dom';
import { useContext } from 'react';
import About from './Peges/About';
import Portfolio from './Peges/Portfolio';
import Instagramm from './Peges/Instagramm';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Personal from './Peges/Personal';
import Starswar from './Components/StarWors';
import { ThemeContext } from './contexts/ThemeContext';
/* eslint-disable linebreak-style */
function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <>
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <About />
      <Portfolio />
      <Instagramm />
      <Personal />
      <Starswar />
      <Router>
        <Routes>
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Instagramm" component={Instagramm} />
        </Routes>
      </Router>
      <Footer />
      </div>
    </>
  );
}

export default App;
