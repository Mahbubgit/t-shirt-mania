import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
  const { id, rating, author, text, date } = review;

  let reviewRating;
  let reviewAuthor;
  let reviewText;
  let reviewDate;

  if (id <= 3) {
    reviewRating = rating;
    reviewAuthor = author;
    reviewText = text;
    reviewDate = date;

    return (
      <div className='cards-container'>
        <div className='card'>
          <h3>Rating: {reviewRating}</h3>
          <p>Date: {reviewDate}</p>
          <p>Author: {reviewAuthor}</p>
          <p>Comment: {reviewText}</p>
        </div>
      </div>
    );

  }


};

export default ReviewCard;