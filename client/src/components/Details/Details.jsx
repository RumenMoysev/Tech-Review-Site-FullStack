import { useState, useEffect } from 'react';

import { useParams, Link, useNavigate } from 'react-router-dom';

import { deleteReview, getDetails } from '../../api/reviewsService.js';
import './Details.css'
import Spinner from '../Spinner/Spinner.jsx'

export default function Details() {
    const [reviewDetails, setReviewDetails] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const { reviewId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getDetails(reviewId)
            .then(x => x.json())
            .then(data => {
                setIsLoading(false)
                setReviewDetails(data)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [])

    async function deleteHandler() {
        await deleteReview(reviewId)

        navigate('/reviews')
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

                    <div className="detailsBtns">
                        {reviewDetails.isOwner
                            ?
                            <>
                                <Link to="edit"><button>Edit</button></Link>
                                <button onClick={deleteHandler}>Delete</button>
                            </>
                            
                            :
                            <button>
                                <a href="/dada">Like</a>
                            </button>
                        }
                        
                        
                    </div>
                </div>

                <p className="likes">No likes yet</p>
            </div>
        </section>
    );
}