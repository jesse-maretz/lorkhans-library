import React from 'react';
import { Switch, Route, Link } from "react-router-dom"
import '../style/Navbar.css'

const Navbar = () => {
    return (
        <div id="nav-links">
            <Link to="/lore/races">
                <button className='nav-btns'>Races of Tamriel</button>
            </Link>
            <Link to="/lore/tamrielic-timeline">
                <button className='nav-btns'>Through the Eras</button>
            </Link>
            <Link to="/es-games">
                <button className='nav-btns'>ESI - ESV</button>
            </Link>
            <Link to="/lore/men-mer-hist">
                <button className='nav-btns'>History of Men and Mer</button>
            </Link>
        </div>
    )
}

export default Navbar;