import React from 'react';
import '../style/Home.css'
import landingImg from "../images/tamirel-imgs/eso-scape.jpeg"
import Footer from './Footer';

const Home = () => {

    return (
        <div>
            <div id="landing-div">
                <img id="eso-scape" src={landingImg} alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default Home