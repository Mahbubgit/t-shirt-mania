import React from 'react';
import { Route } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
// import CustomLink from '../CustomLink/CustomLink';
import ReviewCard from '../ReviewCard/ReviewCard';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const handleSeeAllReviews = () => {
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
    }

    return (
        <div>
            <div className='home-container'>
                <div className="doc-container">
                    <h2>Buy T-Shirt</h2>
                    <h2>Be Smart</h2>
                    <p>Text Hear</p>
                    <button>Live Demo</button>
                </div>
                <div className="img-container">
                    <h3>This is img</h3>
                </div>
            </div>
            <div className="review-container">
                <h2>Customer Reviews(3)</h2>
                {
                    reviews.map(review =>  
                        <ReviewCard key={review.id} review={review}></ReviewCard>
                    )
                }
                <br />
                <button className='btn-all-review' onClick={() => <Reviews></Reviews>}>See All Reviews</button>
            </div>

        </div>
    );
};

export default Home;