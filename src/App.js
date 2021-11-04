import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainLanding from './components/MainLanding'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainLanding />
      <Footer />
    </div>
  );
}

export default App;
