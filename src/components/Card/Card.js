import React from 'react';

const Card = ({reviewId,reviewRating,reviewDate,reviewAuthor,reviewText}) => {

    return (
        <div>
          <h3>ID: { reviewId }</h3>
          <p>Rating: {reviewRating}</p>
          <p>Date: {reviewDate}</p>
          <p>Author: {reviewAuthor}</p>
          <p>Comment: {reviewText}</p>
        </div>
    );
};

export default Card;