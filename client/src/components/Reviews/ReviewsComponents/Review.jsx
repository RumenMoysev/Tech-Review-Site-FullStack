import { Link } from "react-router-dom"

export default function Article(reviewData) {
    return (
        <article className="">
            <h2>{reviewData.article.title}</h2>
            <div className="pImgContainer">
                <p>{reviewData.article.summary}</p>
                <Link to={`${reviewData.article._id}`}><button>Details</button></Link>
            </div>
            <img
                src={reviewData.article.imageUrl}
                alt="picture"
            />
        </article>
    )
}