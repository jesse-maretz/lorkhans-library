import React from 'react';
import FeatureCard from './FeatureCard';
import '../style/Home.css'
// import esoScape from "../images/tamirel-imgs/eso-scape.jpeg"

const Home = () => {

    return (
        <>
            <div id="landing-text">
                <h1>Landing page</h1>
            </div>
            <div className="feature-cards">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>
        </>
    )
}

export default Home