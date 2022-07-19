import { React, useContext } from 'react';
import './App.css';
import {
  BrowserRouter,   
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
    <BrowserRouter>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Instagramm" element={<Instagramm />} />
            <Route path="/Personal" element={<Personal />} />
            <Route path="/Starswar" element={<Starswar />} />
            <Route path="/Products" element={<Products />} />
          </Routes>
        </Provider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
