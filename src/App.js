import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';
import { useRoutes } from 'hookrouter'
import Routes from './components/Routes'

function App() {
  const routeResult = useRoutes(Routes)
  return (
    <div className="App">
      routeResult
    </div>
  );
}

export default App;
