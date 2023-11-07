import { useState } from 'react';

import './Edit.css'

const initialEditState = {
    title: '',
    imageUrl: '',
    summary: '',
    details: ''
}

export default function Edit() {
    const [editState, setEditState] = useState(initialEditState)
    const [error, setError] = useState(undefined)

    function editSubmitHandler(e) {
        e.preventDefault()

        const reviewData = editState
        console.log(reviewData)
    }

    function editValueHandler(e) {
        const name = e.target.name
        const value = e.target.value

        setEditState(state => ({
            ...state,
            [name]: value
        })) 
    }

    return (
        <section id="editPage" className="hidden editPage">
            <div className="form-container">
                <div className="formHeaders">
                    <h2>Edit</h2>
                    {/* {error && <h4>{error}</h4>} */}
                </div>
                <form id="editForm" className="editForm" onSubmit={editSubmitHandler}>
                    <label htmlFor="emailInput">Title</label>
                    <input
                        id="titleInput"
                        className="good titleInput"
                        placeholder="Example: S23 Ultra vs 15 Pro Max"
                        name="title"
                        type="text"
                        value={editState.title}
                        onChange={editValueHandler}
                        required
                    />
                    <label htmlFor="imageInput">Image URL</label>
                    <input
                        id="imageInput"
                        className="good imageInput"
                        placeholder="Example: https://someLink/image.jpg"
                        name="imageUrl"
                        value={editState.imageUrl}
                        onChange={editValueHandler}
                        required
                    />
                    <label htmlFor="summaryInput">Summary</label>
                    <input
                        id="summaryInput"
                        className="good summaryInput"
                        placeholder="Example: 123abc"
                        name="summary"
                        type="text"
                        value={editState.summary}
                        onChange={editValueHandler}
                        required
                    />
                    <label htmlFor="detailsInput">Details</label>
                    <input
                        id="detailsInput"
                        className="good detailsInput"
                        placeholder="Details"
                        name="details"
                        type="text"
                        value={editState.details}
                        onChange={editValueHandler}
                        required
                    />
                    <button type="submit">Confirm Edit</button>
                </form>
            </div>
        </section>
    );
}