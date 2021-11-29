import React from 'react';
import { Link } from "react-router-dom"
import '../style/Navbar.css'

const Navbar = () => {
    return (
        <div id="nav-main">
            <div id="nav-links">
                <Link to="/">
                    <button className="nav-btns">Home</button>
                </Link>
                <Link to="/lore/races">
                    <button className='nav-btns'>Races of Tamriel</button>
                </Link>
                <Link to="/lore/era_timeline">
                    <button className='nav-btns'>Through the Eras</button>
                </Link>
                <Link to="/es_games">
                    <button className='nav-btns'>ESI - ESV</button>
                </Link>
                <Link to="/lore/men_mer">
                    <button className='nav-btns'>History of Men and Mer</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;