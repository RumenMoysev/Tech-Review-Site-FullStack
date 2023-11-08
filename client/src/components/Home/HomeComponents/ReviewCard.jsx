export default function ReviewCard(data) {
    return (
        <div
            className="card "
            style={{
                backgroundImage: `url(${data.reviewData.imageUrl})`
            }}>
            <h4>{data.reviewData.title}</h4>
            <p>{data.reviewData.summary}</p>
        </div>
    )
}