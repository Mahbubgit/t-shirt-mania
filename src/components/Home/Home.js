import React from 'react';
import useReviews from '../../hooks/useReviews';
import HomeContent from '../HomeContent/HomeContent';
import Image from '../Image/Image';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();

    const handleHomeReviews = (newReview) => {
        if (reviews.id <= 3) {
            let homeReviews = [];
            const exists = reviews.find(review => review.id === newReview.id);
            if (!exists) {
                newReview.quantity = newReview.quantity + 1;
                homeReviews = [...reviews, newReview];
            }
            setReviews(homeReviews);
        }
    }

    return (
        <div>
            <div className='home-container'>
                <div className="doc-container">
                    <HomeContent></HomeContent>
                </div>
                <div>
                    <Image></Image>
                </div>
            </div>
            <div className="review-container">
                <h2>Customer Reviews(3)</h2>
                <div className='reviews'>
                    {
                        reviews.map(review =>
                            <ReviewCard
                                key={review.id}
                                review={review}
                                handleHomeReviews={handleHomeReviews}
                            ></ReviewCard>
                        )
                    }
                </div>
                <br />
                <a className='button' href="/reviews">See All reviews</a>
            </div>

        </div>
    );
};

export default Home;