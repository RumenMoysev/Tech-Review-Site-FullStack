import './Edit.css'


export default function Edit() {
    return (
        <section id="editPage" className="hidden editPage">
            <div className="form-container">
                <div className="formHeaders">
                    <h2>Edit</h2>
                    {/* {error && <h4>{error}</h4>} */}
                </div>
                <form id="editForm" className="editForm">
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
                    <button type="submit">Confirm Edit</button>
                </form>
            </div>
        </section>
    );
}