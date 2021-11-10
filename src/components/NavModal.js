import React from 'react';
import '../style/navModal.css'
const NavModal = () => {

    return (
        <div id="modal">
            <button id="navModalButton">Hamburger menu</button>
            <div>
                <p>NavModal</p>
                <div id="listDiv">
                    <ol>
                        <li>A</li>
                        <li>List</li>
                        <li>Here</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default NavModal