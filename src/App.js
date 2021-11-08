import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
