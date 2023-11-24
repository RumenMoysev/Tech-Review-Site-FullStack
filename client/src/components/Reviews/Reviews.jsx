import { useEffect, useState } from 'react';

import Review from './ReviewsComponents/Review.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { searchReview } from '../../api/reviewsService.js';

import './Reviews.css'

export default function Articles() {
    const [articlesData, setArticlesData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [notFoundSearch, setIfNotFoundSearch] = useState(false)

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

    function getSearchReviews(searchParams) {
        searchReview(searchParams)
        .then(response => response.json())
        .then(data => {
            setArticlesData(data)

            if(data.length === 0) {
                return setIfNotFoundSearch(true)
            }

            setIfNotFoundSearch(false)
        })
        .catch(err => console.log(err))
    }

    return (
        isLoading
        ?
        <Spinner/>
        :
        <section id="articles" className="articles ">
            <SearchBar searchHandler={getSearchReviews} />
            {
                articlesData.length > 0
                    ?
                    articlesData.map(article => (
                        <Review key={article._id} review={article} />
                    ))
                    :
                    notFoundSearch ? <h2 className='hidden noReviews'> No reviews found!</h2> : <h2 className='hidden noReviews'>No reviews yet!</h2>
            }
        </section >
    );
}