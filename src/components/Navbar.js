import '../style/Navbar.css'
import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from 'react-icons/gi'
import MenuModal from './MenuModal';

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    const toggleMenu = () => setVisible((s) => !s)

    const menuOptions = [
        {subheading: "Playable Races", opt0: "Dunmer", opt1:"Nord",opt2:"Altmer"},
        {subheading: "Elder Scrolls Games", opt0: "ESI: Arena", opt1: "ESII: Daggerfall", opt2: "ESIII: Morrowind", opt3: "ESIV: Oblivion", opt4: "ESV: Skyrim", opt5: "ESO: Elder Scrolls Online", opt6: "ESVI: Elder Scrolls VI Preview"}
    ]

    {/* <ul className="modal-list" id="race-list">
                        <h3 className="list-title">Playable Races</h3>
                        <a href="#"><li>Dunmer</li></a>
                        <a href="#"><li>Nord</li></a>
                        <a href="#"><li>Altmer</li></a>
                    </ul>
                    <ul className="modal-list" id="game-list">
                        <h3 className="list-title">Elder Scrolls Games</h3>
                        <a href="#"><li>ESV: Skyrim</li></a>
                        <a href="#"><li>Elder Scrolls Online</li></a>
                        <a href="#"><li>ESIV: Oblivion</li></a>
                        <a href="#"><li>ESIII: Morrowind</li></a>
                        <a href="#"><li>ESII: Daggerfall</li></a>
                        <a href="#"><li>ESI: Arena</li></a>
                    </ul>
                    <ul className="modal-list" id="tamriel-list">
                        <h3 className="list-title">The History of Tamriel</h3>
                        <a href="#"><li>Tamriel Through the Eras</li></a>
                        <a href="#"><li>Tamrielic Religion</li></a>
                        <a href="#"><li>Famous Folks</li></a>
                        <a href="#"><li>A Look at Akavir</li></a>
                    </ul> */}



    return (
        <div id="nav-main">
            <div>
                <button onClick={toggleMenu}
                className="nav-btns">Menu</button>
                <MenuModal
                visible={visible}
                menuOptions={menuOptions}>

                </MenuModal>
            </div>
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
    )
}

export default Navbar;