import { useState, useEffect } from 'react';

import { useParams, Link, useNavigate } from 'react-router-dom';

import { deleteReview, getDetails, likeReview } from '../../api/reviewsService.js';
import './Details.css'
import Spinner from '../Spinner/Spinner.jsx'
import { getUserId } from '../../api/sessionStorageService.js';

export default function Details({isAuth}) {
    const [reviewDetails, setReviewDetails] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [hasLiked, setHasLiked] = useState(false)
    const { reviewId } = useParams()

    const userId = getUserId()

    const navigate = useNavigate()

    useEffect(() => {
        getDetails(reviewId)
            .then(x => x.json())
            .then(data => {
                setIsLoading(false)
                setReviewDetails(data)
                if(data.likes.includes(userId)) {
                    setHasLiked(true)
                }
            })
            .catch(err => {
                console.log(err)
                navigate('/reviews')
                setIsLoading(false)
            })
    }, [])

    async function deleteHandler() {
        await deleteReview(reviewId)

        navigate('/reviews')
    }

    async function likeHandler() {
        await likeReview(reviewId)

        reviewDetails.likes.push(userId)
        setReviewDetails(reviewDetails => ({
            ...reviewDetails,
            // likes: reviewDetails.likes.push(userId)
        }))

        setHasLiked(true)
    }

    return (
        isLoading
        ?
        <Spinner/>
        :    
        <section id="details" className="hidden detailsPage">
            <div className="detailsContainer">
                <h2>{reviewDetails.title}</h2>
                <img
                    src={reviewDetails.imageUrl}
                    alt="picture"
                />

                <div className="pBtnContainer">
                    <p>{reviewDetails.description}</p>

                    {isAuth &&
                        <div className="detailsBtns">
                            {reviewDetails.isOwner
                                ?
                                <>
                                    <Link to="edit"><button>Edit</button></Link>
                                    <button onClick={deleteHandler}>Delete</button>
                                </>
                                :
                                hasLiked
                                ?
                                <a>Thank you for liking!</a>
                                :
                                <button onClick={likeHandler}>Like</button>
                            }
                        </div>
                    }
                </div>

                {reviewDetails.likes.length > 0
                    ?   <p className="likes">{reviewDetails.likes.length} likes</p>
                    :   <p className="likes">No likes yet</p>
                }
            </div>
        </section>
    );
}