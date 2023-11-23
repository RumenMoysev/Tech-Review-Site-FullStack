import { useState, useEffect, useContext } from "react"
import AuthContext from "../../../contexts/AuthContext.jsx"

import Comment from "./Comment.jsx"
import { getComments, sendComment } from "../../../api/reviewsService.js"

export default function CommentSection({ reviewId }) {
    const [commentFormValue, setCommentFormValue] = useState('')
    const [comments, setComments] = useState([])
    const { auth } = useContext(AuthContext)

    const authToken = auth.authToken

    useEffect(() => {
        getComments(reviewId, authToken)
        .then(response => response.json())
        .then(data => setComments([...data]))
        .catch(error => console.log(error))
    }, [auth])

    const setCommentStateHandler = (value) => {
        setComments(value)
    }

    const commentValueHandler = (e) => {
        setCommentFormValue(e.target.value)
    }

    const addComment = async () => {
        if(commentFormValue.length < 0) {
            //TODO MAKE ERROR HANDLING
            return console.log('Comment should be at least 1 characters')
        }

        const commentData = await (await sendComment(reviewId, commentFormValue, authToken)).json()
        setComments(state => [...state, commentData])
        setCommentFormValue('')
    }

    return (
        <div className="commentContainer">
            <h3>Comments </h3>
            {authToken && 
                <div className='commentInputBox'>
                    <input type='text' required="required" value={commentFormValue} onChange={commentValueHandler}></input>
                    <span>Comment</span>
                    <button onClick={addComment}>Post</button>
                </div>
            }
            
            <div className='comments'>
                {comments.length > 0
                    ? comments.map(comment => <Comment key={comment._id} commentData={comment} setComments={setCommentStateHandler} reviewId={reviewId} authToken={authToken}/>)
                    : <p style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>No comments yet</p>
                }
            </div>
        </div>
    )
}