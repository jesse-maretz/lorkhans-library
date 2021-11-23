import React from 'react';
import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home'
import RaceLore from './components/RaceLore'


function App() {
  return (
    <div>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lore/races" element={<RaceLore />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
