import React from 'react';
import '../style/Home.css'
import Navbar from './Navbar';
import NavModal from './NavModal'
import Footer from './Footer';
import RaceLore from './RaceLore';

const Home = () => {

    return (
        <div>
            <div id="home-div">
                <Navbar />
                <RaceLore />
            </div>
            <Footer />
        </div>
    )
}

export default Home