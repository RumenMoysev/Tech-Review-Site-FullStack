export default function Article({_id, title, imageUrl, summary}) {
    return (
        <article className="hidden">
            <h2>{title}</h2>
            <div className="pImgContainer">
                <p>{summary}</p>
                <button>
                    <a href={`/details/${_id}`}>Details</a>
                </button>
            </div>
            <img
                src={imageUrl}
                alt="picture"
            />
        </article>
    )
}