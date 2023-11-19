import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

export default function CommentSection() {
    const [commentFormData, setCommentFormData] = useState('')

    const commentValueHandler = (e) => {
        setCommentFormData(e.target.value)
    }

    return (
        <div className="commentContainer">
            <h3>Comments</h3>
            <div className='commentInputBox'>
                <input type='text' required="required" value={commentFormData} onChange={commentValueHandler}></input>
                <span>Comment</span>
                <button>Post</button>
            </div>
            <div className='comments'>
                <div className='comment'>
                    <div className='commentData'>
                        <Link to="/userId/profile">Username:</Link>
                        <p>Some comment thast about this long</p>
                    </div>
                    <img src='/images/like.svg' />
                </div>
                <div className='comment'>
                    <div className='commentData'>
                        <Link to="/userId/profile">Username:</Link>
                        <p>Some comment thast about this az sum niggaaaaaaaaaaaaaaa</p>
                    </div>
                    <img src='/images/like.svg' />
                </div>
            </div>
        </div>
    )
}