import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext.js"

export default function Comment() {
    const {isAuth} = useContext(AuthContext)

    const onLikeClick = () => {
        console.log('Like clicked')
    }

    return (
    <div className='comment'>
        <div className='commentData'>
            <Link to="/userId/profile">Username:</Link>
            <p>Some comment thast about this long</p>
        </div>
        <div className="likeData">
            <p>2 likes</p>
            {isAuth && <img src='/images/like.svg' onClick={onLikeClick} />}
        </div>
    </div>
    )
}