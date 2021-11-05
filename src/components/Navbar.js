import React from 'react';
import { Router, Route, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Router>
                <button><Link to='/lore/races'>Races of Tamriel</Link></button>
                <button>Through the Eras</button>
                <button>ESI - ESV</button>
                <button>History of Men and Mer</button>
            </Router>
        </div>
        
    )
}

export default Navbar;