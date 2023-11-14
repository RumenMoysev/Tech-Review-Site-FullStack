import { Link } from "react-router-dom"

export default function Article({review}) {
    return (
        <article className="">
            <div className="headerDateArticle">
                <h2>{review.title}</h2>
                <h4>Created on: 21.31.3122</h4>
            </div>
            <div className="pImgContainer">
                <p>{review.summary}</p>
                <Link to={`${review._id}`}><button>Details</button></Link>
            </div>
            <img
                src={review.imageUrl}
                alt="picture"
            />
        </article>
    )
}