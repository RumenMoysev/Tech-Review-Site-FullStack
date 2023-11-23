import { Link } from "react-router-dom"
import { deleteComment } from "../../../api/reviewsService.js"

export default function Comment({ commentData, setComments, reviewId, authToken }) {

    const onLikeClick = () => {
        console.log('Like clicked')
    }

    const onDeleteClick = () => {
        setComments(state => state.filter(comment => comment._id !== commentData._id))
        deleteComment(reviewId, commentData._id, authToken)
    }

    return (
    <div className='comment'>
        <div className='commentData'>
            <Link to="/userId/profile">{commentData.owner.username}:</Link>
            <p>{commentData.comment}</p>
        </div>
        <div className="likeData">
            {commentData.likes.length > 0 && <p>{commentData.likes.length} likes</p>}
            {authToken ?
                commentData.isOwner ? <img src="/images/bin.svg" style={{ width: '19.5px' }} onClick={onDeleteClick} /> : <img src='/images/like.png' style={{ width: '19px' }} onClick={onLikeClick} />
                : null
            }
        </div>
    </div>
    )
}