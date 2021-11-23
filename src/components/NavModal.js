import React from 'react';
import '../style/NavModal.css'


function NavModal(props) {

    return (
        <div>
            <button id="open-modal">Modal Menu</button>
            <div id="modal">
                <div id="modal-menu">

                    <div className="modal-menu-list">
                        <ul className="modal-list" id="race-list">
                            <h3 className="list-title">Playable Races</h3>
                            <a href="#"><li>Dunmer</li></a>
                            <a href="#"><li>Nord</li></a>
                            <a href="#"><li>Altmer</li></a>
                        </ul>
                    </div>

                    <div className="modal-menu-list">
                        <ul className="modal-list" id="game-list">
                            <h3 className="list-title">Elder Scrolls Games</h3>
                            <a href="#"><li>ESV: Skyrim</li></a>
                            <a href="#"><li>Elder Scrolls Online</li></a>
                            <a href="#"><li>ESIV: Oblivion</li></a>
                            <a href="#"><li>ESIII: Morrowind</li></a>
                            <a href="#"><li>ESII: Daggerfall</li></a>
                            <a href="#"><li>ESI: Arena</li></a>
                        </ul>
                    </div>

                    <div className="modal-menu-list">
                        <ul className="modal-list" id="tamriel-list">
                            <h3 className="list-title">The History of Tamriel</h3>
                                <a href="#"><li>Tamriel Through the Eras</li></a>
                                <a href="#"><li>Tamrielic Religion</li></a>
                                <a href="#"><li>Famous Folks</li></a>
                                <a href="#"><li>A Look at Akavir</li></a>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavModal