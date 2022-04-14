import React from 'react';

const Review = (props) => {
    const {rating, author, text, date} = props.review;
    return (
        <div>
            <p>Rating: {rating}</p>
            <p>Date: {date}</p>
            <p>Author: {author}</p>
            <p>Comment: {text}</p>
        </div>
    );
};

export default Review;