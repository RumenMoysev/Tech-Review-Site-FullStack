import { useEffect, useState } from 'react';

import './Home.css'
import ReviewCard from './HomeComponents/ReviewCard.jsx';

export default function Home() {
    const [last2Reviews, setLast2Reviews] = useState(undefined)

    useEffect(() => {
        fetch('http://localhost:3030/data/reviews/last2')
        .then(x => x.json())
        .then(reviews => {
            if(reviews.length > 0) {
                setLast2Reviews(reviews)
            }
        })
    }, [])

    return (
        <section id="homePage" className='homePage'>
            <div className="row">
                <div className="col hidden">
                    <h1>Tech Review Site</h1>
                    <p>
                        This is the place where you can find all information
                        you're looking for in the latest tech word!
                    </p>
                    <button>Reviews</button>
                </div>
                <div className="col notTouching ">
                    {last2Reviews
                        ?
                            last2Reviews.map(review => (
                                <ReviewCard key={review._id} reviewData={review}/>
                            ))
                        :   
                            <h2 className='hidden'>No reviews yet!</h2>
                    }
                </div>
            </div>
        </section>
    );
}