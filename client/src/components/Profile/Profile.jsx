import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '../Spinner/Spinner.jsx'
import Review from '../Reviews/ReviewsComponents/Review.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx';
import AuthContext from '../../contexts/AuthContext.jsx';
import './Profile.css'

import { getUserData, getUserLikedPosts } from '../../api/userService.js';
import { getUserCreatedPosts } from '../../api/userService.js';

export default function Profile({ isMyProfile }) {
    const [reviewsData, setReviewsData] = useState([])
    const [reviewsToLoad, setReviewsToLoad] = useState({createdBy: true, likedBy: false})
    const [isLoading, setIsLoading] = useState(true)

    const [auth, setAuth] = useState({})
    const authContext = useContext(AuthContext).auth
    const { currentUserId } = useParams()

    const [reviewDataForSearch, setReviewDataForSearch] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if(isMyProfile) {
            setAuth(authContext)
        } else if (!isMyProfile) {
            authContext.userId === currentUserId && navigate('/myProfile')

            getUserData(currentUserId)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                navigate('/404')
            })
            .then(userData => setAuth(userData))
            .catch(err => navigate('/404'))
        }
    }, [isMyProfile])

    useEffect(() => {
        const userId = isMyProfile ? auth.userId : currentUserId
        if(userId) {
            const requestForReviews = reviewsToLoad.createdBy ? getUserCreatedPosts(userId) : getUserLikedPosts(userId, auth.authToken)

            requestForReviews
                .then(response => response.json())
                .then(data => {
                    setReviewsData(data)
                    setReviewDataForSearch(data)
                })
                .catch(err => console.log(err))
        }

        setIsLoading(false)
    }, [auth, reviewsToLoad])

    const postedClickHandler = () => setReviewsToLoad({createdBy:true, likedBy: false})

    const likedClickHandler = () => setReviewsToLoad({createdBy:false, likedBy: true})

    const searchHandler = (searchParams) => {
        const foundReviews = reviewDataForSearch.filter(review => review.title.toLowerCase().includes(searchParams.toLowerCase()))

        foundReviews.length > 0 ? setReviewsData(foundReviews) : setReviewsData([])
    }

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
                    <SearchBar searchHandler={searchHandler}/>
                    <div className='profileButtons'>
                        <button onClick={postedClickHandler} className={reviewsToLoad.createdBy ? 'selected' : undefined} >Posted</button>
                        {isMyProfile && <button onClick={likedClickHandler} className={reviewsToLoad.likedBy ? 'selected' : undefined} >Liked</button>}
                    </div>
                    {
                        reviewsData.length > 0
                            ?
                            reviewsData.map(review => (
                                <Review key={review._id} review={review} />
                            ))
                            :
                            <h2 className='hidden noReviews'> No reviews found!</h2>
                    }
                </section>
            </>
    );
}