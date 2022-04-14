import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>This is Reviews Page(3)</h2>
            {
                reviews.map(review => <Review review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;