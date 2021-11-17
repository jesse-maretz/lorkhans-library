import React from 'react';
import '../style/Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div id="nav-div">
                <button className='nav-btns'>Races of Tamriel</button>
                <button className='nav-btns'>Through the Eras</button>
                <button className='nav-btns'>ESI - ESV</button>
                <button className='nav-btns'>History of Men and Mer</button>
            </div>
        </div>
        
    )
}

export default Navbar;