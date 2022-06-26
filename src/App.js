import { React, useContext } from 'react';
/* eslint linebreak-style: ["error", "windows"] */
import './App.css';
import {
  BrowserRouter as Router,   
  Route,
  Routes,
} from 'react-router-dom';
import About from './peges/About';
import Portfolio from './peges/Portfolio';
import Instagramm from './peges/Instagramm';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Personal from './peges/Personal';
import Starswar from './components/Star_Wors/StarWors';
import { ThemeContext } from './contexts/ThemeContext';
/* eslint-disable linebreak-style */
function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
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
  );
}

export default App;
