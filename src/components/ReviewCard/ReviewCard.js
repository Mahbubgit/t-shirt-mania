import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
  const { id, rating, author, text, date } = review;

  let reviewId;
  let reviewRating;
  let reviewAuthor;
  let reviewText;
  let reviewDate;

  if (id <= 3) {
    reviewId = id;
    reviewRating = rating;
    reviewAuthor = author;
    reviewText = text;
    reviewDate = date;

    return (
      <div className='cards-container'>
        <div className='card'>
          <h3>ID: {reviewId}</h3>
          <p>Rating: {reviewRating}</p>
          <p>Date: {reviewDate}</p>
          <p>Author: {reviewAuthor}</p>
          <p>Comment: {reviewText}</p>
        </div>
      </div>
    );

  }


};

export default ReviewCard;