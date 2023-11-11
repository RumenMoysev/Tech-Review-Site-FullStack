import { useEffect, useState } from 'react';
import './Reviews.css'
import Review from './ReviewsComponents/Review.jsx';
import Spinner from '../Spinner/Spinner.jsx';

export default function Articles() {
    const [articlesData, setArticlesData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3030/data/reviews')
            .then(x => x.json())
            .then(data => {
                setIsLoading(false)
                if (data.length > 0) {
                    setArticlesData(data)
                }
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [])

    return (
        isLoading
        ?
        <Spinner />
        :
        <section id="articles" className="articles ">
            {
                articlesData
                    ?
                    articlesData.map(article => (
                        <Review key={article._id} article={article} />
                    ))
                    :
                    <h2 className='hidden'>No reviews yet!</h2>
            }
        </section >
    );
}