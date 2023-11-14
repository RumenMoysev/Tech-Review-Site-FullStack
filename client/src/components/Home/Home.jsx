import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css'
import ReviewCard from './HomeComponents/ReviewCard.jsx';
import Spinner from '../Spinner/Spinner.jsx';

export default function Home() {
    const [last2Reviews, setLast2Reviews] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:3030/data/reviews/last2')
        .then(x => x.json())
        .then(reviews => {
            setIsLoading(false)
            if(reviews.length > 0) {
                setLast2Reviews(reviews)
            }
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
        })
    }, [])

    const onReviewsClickHandler = () => navigate('/reviews')

    return (
        isLoading 
        ?
        <Spinner/>
        :
        <section id = "homePage" className = 'homePage' >
                <div className = "row">
                    <div className = "col hidden">
                        <h1>Tech Review Site</h1>
                        <p>
                            This is the place where you can find all information
                            you're looking for in the latest tech word!
                        </p>
                        <button onClick={onReviewsClickHandler}>Reviews</button>
                    </div >
                <div className="col notTouching ">
                    {last2Reviews
                        ?
                        last2Reviews.map(review => (
                            <ReviewCard key={review._id} reviewData={review} />
                        ))
                        :
                        <h2 className='hidden'>No reviews yet!</h2>
                    }
                </div>
            </div >
        </section >
    )
}