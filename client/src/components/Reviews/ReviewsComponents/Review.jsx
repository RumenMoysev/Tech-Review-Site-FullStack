import { Link } from "react-router-dom"

export default function Article({review}) {
    return (
        <article className="">
            <div className="headerDateArticle">
                <h2>{review.title}</h2>
                <h4>Created on: {review.createdAtTime}</h4>
            </div>
            <div className="pImgContainer">
                <p>{review.summary}</p>
                <Link to={`/reviews/${review._id}`}><button>Details</button></Link>
            </div>
            <img
                src={review.imageUrl}
                alt="picture"
            />
        </article>
    )
}