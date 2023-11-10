import { useState, useEffect } from 'react';

import { useNavigate, useParams } from "react-router-dom"

import { editReview } from '../../api/reviewsService.js';

import './EditReview.css'

const editFormState = {
    title: '',
    imageUrl: '',
    summary: '',
    description: ''
}

export default function Edit() {
    const [editFormValue, setEditFormValue] = useState(editFormState)
    const [error, setError] = useState(undefined)

    const {reviewId} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3030/data/reviews/${reviewId}/all-data`)
        .then(x => x.json())
        .then(data => setEditFormValue(data))
        .catch(err => console.log(err))
    }, [])

    async function editSubmitHandler(e) {
        e.preventDefault()

        let response = editReview(editFormValue, setError, reviewId)

        if(response instanceof Promise) {
            response = await response
            const json = await response.json()

            if(response.ok) {
                navigate(`/reviews/${reviewId}`)
            } else {
                setError(json.message)
            }
            
        }
    }

    function editValueHandler(e) {
        const name = e.target.name
        const value = e.target.value

        setEditFormValue(state => ({
            ...state,
            [name]: value
        })) 
    }

    return (
        <section id="editPage" className="hidden editPage">
            <div className="form-container">
                <div className="formHeaders">
                    <h2>Edit</h2>
                    {error && <h4>{error}</h4>}
                </div>
                <form id="editForm" className="editForm" onSubmit={editSubmitHandler}>
                    <label htmlFor="emailInput">Title</label>
                    <input
                        id="titleInput"
                        className="good titleInput"
                        placeholder="Example: S23 Ultra vs 15 Pro Max"
                        name="title"
                        type="text"
                        value={editFormValue.title}
                        onChange={editValueHandler}
                        required
                    />
                    <label htmlFor="imageInput">Image URL</label>
                    <input
                        id="imageInput"
                        className="good imageInput"
                        placeholder="Example: https://someLink/image.jpg"
                        name="imageUrl"
                        value={editFormValue.imageUrl}
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
                        value={editFormValue.summary}
                        onChange={editValueHandler}
                        required
                    />
                    <label htmlFor="detailsInput">Description</label>
                    <input
                        id="detailsInput"
                        className="good detailsInput"
                        placeholder="Description"
                        name="description"
                        type="text"
                        value={editFormValue.description}
                        onChange={editValueHandler}
                        required
                    />
                    <button type="submit">Confirm Edit</button>
                </form>
            </div>
        </section>
    );
}