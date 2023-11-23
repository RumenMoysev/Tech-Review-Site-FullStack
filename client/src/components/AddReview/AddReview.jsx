import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm.js';
import AuthContext from '../../contexts/AuthContext.jsx';
import { addReview } from '../../api/reviewsService.js';

import './AddReview.css'

const addFormState = {
    title: '',
    imageUrl: '',
    summary: '',
    description: ''
}

export default function AddReview() {
    const [addFormValue, addValueHandler] = useForm(addFormState)
    const [error, setError] = useState(undefined)

    const { auth } = useContext(AuthContext)
    const authToken = auth.authToken

    const navigate = useNavigate()

    useEffect(() => {
        if (!authToken) {
            setError('You need to be logged in')
            setTimeout(() => navigate('/'), 1500)
        }
    }, [auth])

    async function addFormHandler(e) {
        e.preventDefault()
        
        let response = addReview(addFormValue, setError, authToken)

        if(response instanceof Promise) {
            response = await response
            const json = await response.json()

            if (!response.ok) {
                setError(json.message)
            } else {
                setError(undefined)
                navigate('/reviews')
            }
        }
    }

    return (
        <section id="addPage" className="hidden addPage">
            <div className="form-container">
                <div className="formHeaders">
                    <h2>Add Review</h2>
                    {error && <h4>{error}</h4>}
                </div>
                <form id="addForm" className="addForm" onSubmit={addFormHandler}>
                    <label htmlFor="emailInput">Title</label>
                    <input
                        id="titleInput"
                        className="good titleInput"
                        placeholder="Example: S23 Ultra vs 15 Pro Max"
                        name="title"
                        type="text"
                        value={addFormValue.title}
                        onChange={addValueHandler}
                        required
                    />
                    <label htmlFor="imageInput">Image URL</label>
                    <input
                        id="imageInput"
                        className="good imageInput"
                        placeholder="Example: https://someLink/image.jpg"
                        name="imageUrl"
                        value={addFormValue.imageUrl}
                        onChange={addValueHandler}
                        required
                    />
                    <label htmlFor="summaryInput">Summary</label>
                    <textarea
                        id="summaryInput"
                        className="good summaryInput"
                        placeholder="Summary"
                        name="summary"
                        type="text"
                        value={addFormValue.summary}
                        onChange={addValueHandler}
                        required
                    />
                    <label htmlFor="descriptionInput">Description</label>
                    {/* make this a text area */}
                    <textarea
                        id="descriptionInput"
                        className="good descriptionInput"
                        placeholder="Description"
                        name="description"
                        type="text"
                        value={addFormValue.description}
                        onChange={addValueHandler}
                        required
                    />
                    <button type="submit">Create</button>
                </form>
            </div>
        </section>
    );
}