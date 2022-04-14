import React from 'react';
import HomeImage from '../images/t-shirt.webp';
import './Image.css';

const Image = () => {
    return (
        <div>
            <img src={HomeImage} className='home-image' alt="logo"/>
        </div>
    );
};

export default Image;