import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navbar';
import HomePage from './pages/';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component ={ContactPage} />
    </Router>
  );
}

export default App;

console.log('App.js loaded');