import { useContext, useState } from 'react';

import Spinner from '../Spinner/Spinner.jsx'
import Review from '../Reviews/ReviewsComponents/Review.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx';
import AuthContext from '../../contexts/AuthContext.jsx';

import './Profile.css'

export default function Profile({isOwnProfile}) {
    const [articlesData, setArticlesData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [notFoundSearch, setNotFoundSearch] = useState(false)
    const [auth, setAuth] = useState(useContext(AuthContext).auth)

    console.log(isOwnProfile)

    return (
        isLoading
            ?
            <Spinner />
            :
            <>
                <div className='userData'>
                    <h2>Profile: </h2>
                    <h2>{auth.username}</h2>
                    <h3>Email: {auth.email}</h3>
                    
                </div>
                    
                <section id="articles" className="articles profile">
                    <SearchBar/>
                    <div className='profileButtons'>
                        <button>Posted</button>
                        <button>Liked</button>
                    </div>
                    {
                        articlesData.length > 0
                            ?
                            articlesData.map(article => (
                                <Review key={article._id} review={article} />
                            ))
                            :
                            notFoundSearch ? <h2 className='hidden noReviews'> No reviews found!</h2> : <h2 className='hidden noReviews'>No reviews yet!</h2>
                    }
                </section>
            </>
    );
}