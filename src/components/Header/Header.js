import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Welcome to T-Shirt Mania</h2>
            <nav className='navMenu'>
                <CustomLink to={'/home'}>Home</CustomLink>
                <CustomLink to={'/reviews'}>Reviews</CustomLink>
                <CustomLink to={'/dashboard'}>Dashboard</CustomLink>
                <CustomLink to={'/blogs'}>Blogs</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;