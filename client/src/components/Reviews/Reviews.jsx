import { useEffect, useState } from 'react';
import './Reviews.css'
import Article from './ReviewsComponents/Review.jsx';

export default function Articles() {
    const [articles, setArticles] = useState(undefined)

    useEffect(() => {
        fetch('http://localhost:3030/data/reviews')
        .then(x => x.json())
        .then(data => {
            if(data.length > 0) {
                setArticles(data)
            }
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <section id="articles" className="articles ">
            {articles
            ?
                articles.map(article => (
                    <Article key={article._id} article={article}/>
                ))
            :
                <h2 className='hidden'>No reviews yet!</h2>
            }
        </section>
    );
}