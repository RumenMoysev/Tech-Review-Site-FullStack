import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ReviewCard({reviewData}) {
    const [reviewId, setReviewId] = useState(undefined)
    const navigate = useNavigate()

    useEffect(() => setReviewId(reviewData._id), [])

    const clickHandler = () => setTimeout(() => navigate(`/reviews/${reviewId}`), 60)

    return (
        <div onClick={clickHandler} className="card " style={{ backgroundImage: `url(${reviewData.imageUrl})` }}>
            <h4>{reviewData.title}</h4>
            <p>{reviewData.summary}</p>
            <div className="likeContainer">
                <img src="/images/like.svg" />
                <p className="likesCount">{reviewData.likes.length}</p>
            </div>
        </div>
    )
}