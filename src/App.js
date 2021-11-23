import React from 'react';
import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home'
import RaceLore from './components/RaceLore'
import EraTimeline from './components/EraTimeline';
import ESGames from './components/ESGames';
import MenAndMer from './components/MenAndMer'

function App() {
  return (
    <div>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lore/races" element={<RaceLore />}></Route>
          <Route path="/lore/era_timeline" element={<EraTimeline />}></Route>
          <Route path="/es_games" element={<ESGames />}></Route>
          <Route path="lore/men_mer" element={<MenAndMer />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
