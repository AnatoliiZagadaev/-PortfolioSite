import { React, useContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,   
  Route,
  Routes,
} from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import About from './peges/About';
import Portfolio from './peges/Portfolio';
import Instagramm from './peges/Instagramm';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Personal from './peges/Personal';
import Starswar from './components/Star_Wors/StarWors';
import { ThemeContext } from './contexts/ThemeContext';
import Products from './store/reduser';
import productReducer from './store/actions/redusers';

const reducer = combineReducers({
  products: productReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

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
      <Provider store={store}>
        <Products />
      </Provider>
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
