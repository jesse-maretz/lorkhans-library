import React from 'react';

import '../style/Home.css'
import esoScape from "../images/tamirel-imgs/eso-scape.jpeg"

import Footer from './Footer';

const Home = () => {

    return (
        <div id="home-main">
            <div id="landing-div">
                <img src={esoScape} id="eso-scape" alt="" />
            </div>
            <div id="landing-text">
                <h1>Landing page</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Home