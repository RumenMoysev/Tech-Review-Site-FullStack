import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext.js"

import Comment from "./Comment.jsx"
import { getComments } from "../../../api/reviewsService.js"

export default function CommentSection({ reviewId }) {
    const [commentFormData, setCommentFormData] = useState('')
    const [comments, setComments] = useState([])
    const { isAuth } = useContext(AuthContext)

    useEffect(() => {
        getComments(reviewId)
        .then(response => response.json())
        .then(data => setComments([...data]))
        .catch(error => console.log(error))
    }, [comments])

    const commentValueHandler = (e) => {
        setCommentFormData(e.target.value)
    }

    return (
        <div className="commentContainer">
            <h3>Comments </h3>
            {isAuth && 
                <div className='commentInputBox'>
                    <input type='text' required="required" value={commentFormData} onChange={commentValueHandler}></input>
                    <span>Comment</span>
                    <button>Post</button>
                </div>
            }
            
            <div className='comments'>
                {comments.length > 0
                    ? comments.map(comment => <Comment commentData={comment} />)
                    : <p style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>No comments yet</p>
                }
            </div>
        </div>
    )
}