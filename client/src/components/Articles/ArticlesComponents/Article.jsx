export default function Article(reviewData) {

    return (
        <article className="">
            <h2>{reviewData.article.title}</h2>
            <div className="pImgContainer">
                <p>{reviewData.article.summary}</p>
                <button>
                    <a href={`/details/${reviewData.article._id}`}>Details</a>
                </button>
            </div>
            <img
                src={reviewData.article.imageUrl}
                alt="picture"
            />
        </article>
    )
}