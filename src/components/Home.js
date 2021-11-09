import React from 'react';
import Navbar from './Navbar';
import NavModal from './NavModal'
import Footer from './Footer';

const Home = () => {

    return (
        <div>
            <div>
                <Navbar />
                <NavModal />
            </div>
            <Footer />
        </div>
    )
}

export default Home