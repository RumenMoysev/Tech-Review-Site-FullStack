import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext.js"

import Comment from "./Comment.jsx"

export default function CommentSection() {
    const [commentFormData, setCommentFormData] = useState('')
    const { isAuth } = useContext(AuthContext)

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
                <Comment />
                <Comment />
            </div>
        </div>
    )
}