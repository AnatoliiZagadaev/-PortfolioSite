import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,   
    Route,
    Routes,
  } from 'react-router-dom';
import About from './Peges/About.js';
import Portfolio from "./Peges/Portfolio.js";
import Instagramm from "./Peges/Instagramm.js";
import Personal from './Peges/Personal.js';
import Footer from './Components/Footer';
import Header from './Components/Header';


function App() {
  return (
    <>  
    <Header/>
    <About/>
    <Portfolio/>
    <Instagramm/>
    <Personal/>
    <Router>
         <Routes>
             <Route  path="/About" component = {About}/>
             <Route  path="/Portfolio" component = {Portfolio}/>
             <Route  path="/Instagramm" component = {Instagramm}/>
         </Routes>
      </Router>
   <Footer/>
    </>
  );
}

export default App;
