import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './ReviewCard.css';


const ReviewCard = ({review}) => {
  const {id, rating, author, text, date} = review;
  
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





export default ReviewCard;