import React from 'react';
import './Review.css';

const Review = (props) => {
    const { rating, author, text, date } = props.review;

    return (
        <div className='cards-container'>
            <div className='card'>
                <h3>Rating: {rating}</h3>
                <p>Date: {date}</p>
                <p>Author: {author}</p>
                <p>Comment: {text}</p>
            </div>
        </div>
    );
};

export default Review;