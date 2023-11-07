import './AddReview.css'

export default function AddReview() {
    return (
        <section id="addPage" className="hidden addPage">
            <div className="form-container">
                <div className="formHeaders">
                    <h2>Add Review</h2>
                    {/* {error && <h4>{error}</h4>} */}
                </div>
                <form id="addForm" className="addForm">
                    <label htmlFor="emailInput">Title</label>
                    <input
                        id="titleInput"
                        className="good titleInput"
                        placeholder="Example: S23 Ultra vs 15 Pro Max"
                        name="title"
                        type="text"
                        required
                    />
                    <label htmlFor="imageInput">Image URL</label>
                    <input
                        id="imageInput"
                        className="good imageInput"
                        placeholder="Example: https://someLink/image.jpg"
                        name="imageUrl"
                        required
                    />
                    <label htmlFor="summaryInput">Summary</label>
                    <input
                        id="summaryInput"
                        className="good summaryInput"
                        placeholder="Example: 123abc"
                        name="summary"
                        type="text"
                        required
                    />
                    <label htmlFor="detailsInput">Details</label>
                    <input
                        id="detailsInput"
                        className="good detailsInput"
                        placeholder="Details"
                        name="details"
                        type="text"
                        required
                    />
                    <button type="submit">Confirm Add</button>
                </form>
            </div>
        </section>
    );
}