import React from 'react';
import '../style/Home.css'
import Navbar from './Navbar';
import NavModal from './NavModal'
import Footer from './Footer';

const Home = () => {

    return (
        <div>
            <div id="home-div">
                <Navbar />
                <NavModal />
            </div>
            <Footer />
        </div>
    )
}

export default Home