import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

export default function Comment({ commentData, likeComment, deleteComment, authToken, userId }) {
    const [hasLiked, setHasLiked] = useState(false)

    useEffect(() => {
        if(commentData.likes.includes(userId)) {
            setHasLiked(true)
        }
    })

    const onLikeClick = () => likeComment(commentData._id)

    const onDeleteClick = () => deleteComment(commentData._id)

    return (
        <div className='comment'>
            <div className='commentData'>
                {authToken ? <Link to={`/userProfile/${commentData.owner._id}`}>{commentData.owner.username}: </Link> : <Link style={{borderBottom:'none', cursor:'default'}}>{commentData.owner.username}: </Link>}
                
                <p>{commentData.comment}</p>
            </div>
            <div className="likeData">
                {commentData.likes.length == 1 && <p>{commentData.likes.length} like</p>}
                {commentData.likes.length > 1 && <p>{commentData.likes.length} likes</p>}
                {authToken
                ? 
                    commentData.isOwner
                    ? <img src="/images/bin.svg" style={{ width: '19.5px' }} onClick={onDeleteClick} />
                    : hasLiked ?  null : <img src='/images/like.png' style={{ width: '19px' }} onClick={onLikeClick} />
                :
                    null
                }
            </div>
        </div>
    )
}