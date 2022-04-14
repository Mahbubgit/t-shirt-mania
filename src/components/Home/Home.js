import React from 'react';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {

   
    return (
        <div className='home-container'>
            <div className="doc-container">
            {/* <img src= "../../../public/t-shirt.png" alt="" width={'200px'} /> */}
                <h2>Buy T-Shirt</h2>
                <h3>Be Smart</h3>
                <p>Text Hear</p>
                <button>Live Demo</button>
            </div>
            <div className="img-container">
                <h3>This is img</h3>
                <img src="../images/t-shirt.png" alt="" />
            </div>
            <div className="review-container">
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;