import React from 'react';
import './Review.css';

const Review = (props) => {
    const { id, rating, author, text, date } = props.review;

    return (
        <div className='cards-container'>
            <div className='card'>
                <h3>ID: {id}</h3>
                <p>Rating: {rating}</p>
                <p>Date: {date}</p>
                <p>Author: {author}</p>
                <p>Comment: {text}</p>
            </div>
        </div>
    );
};

export default Review;