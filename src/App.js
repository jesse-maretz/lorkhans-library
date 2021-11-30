import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar';
import Home from './components/Home'
import RaceLore from './components/lore-pages/RaceLore'
import EraTimeline from './components/lore-pages/EraTimeline';
import ESGames from './components/lore-pages/ESGames';
import MenAndMer from './components/lore-pages/MenAndMer'

function App() {
  return (
    <div>
      <Navbar />
      <div className="app">
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
