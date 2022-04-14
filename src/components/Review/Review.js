import React from 'react';
import './Review.css';

const Review = (props) => {
    const {id, rating, author, text, date} = props.review;

    return (
        <div className='review-card'>
            <h3>ID: { id }</h3>
            <p>Rating: {rating}</p>
            <p>Date: {date}</p>
            <p>Author: {author}</p>
            <p>Comment: {text}</p>
        </div>
    );
};

export default Review;