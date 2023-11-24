import internalFetch from "../lib/request.js"
import { getAuth } from "./sessionStorageService.js"

const titleLength = 6
const summaryLength = 10
const descriptionLength = 20

export function addReview(reviewData, setError, authToken) {
    const error = validateData(reviewData)

    if(error) {
        return setError(error)
    } else {
        setError(undefined)
    }

    if(!authToken) {
        return setError('You need to be logged in to add a review')
    }

    const createdAtTime = new Date().toLocaleString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'shortOffset' })
    
    reviewData.createdAtTime = createdAtTime

    return internalFetch('POST', `data/reviews`, authToken, reviewData)
}

export function editReview(reviewData, oldReviewData, setError, reviewId, authToken) {
    const hasNotChanged = validateChange(reviewData, oldReviewData)

    if(hasNotChanged) {
        return setError('Please make a change')
    }

    const error = validateData(reviewData)

    if (error) {
        return setError(error)
    } else {
        setError(undefined)
    }

    if (!authToken) {
        return setError('You need to be logged in to edit a review')
    }

    const updatedAtTime = new Date().toLocaleString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'shortOffset' })
    
    reviewData.updatedAtTime = updatedAtTime

    return internalFetch('PUT', `data/reviews/${reviewId}`, authToken, reviewData)
}

export const getEditData = (reviewId, authToken) => internalFetch('GET', `data/reviews/${reviewId}/all-data`, authToken)

export const deleteReview = (reviewId, authToken) => internalFetch('DELETE', `data/reviews/${reviewId}`, authToken)

export const getDetails = (reviewId, authToken) => internalFetch('GET', `data/reviews/${reviewId}`, authToken)

export const getComments = (reviewId, authToken) => internalFetch('GET', `data/reviews/${reviewId}/getComments`, authToken)

export const sendComment = (reviewId, comment, authToken) => internalFetch('POST', `data/reviews/${reviewId}/addComment`, authToken, {comment})

export const deleteComment = (reviewId, commentId, authToken) => internalFetch('DELETE', `data/reviews/${reviewId}/deleteComment/${commentId}`, authToken)

export const likeComment = (reviewId, commentId, authToken) => internalFetch('POST', `data/reviews/${reviewId}/likeComment/${commentId}`, authToken)

export const likeReview = (reviewId, authToken) => internalFetch('POST', `data/reviews/${reviewId}/like`, authToken)

function validateData(reviewData) {
    if (reviewData.title.length < titleLength) {
        return `Title should be at least ${titleLength} characters long`
    }
    if (!reviewData.imageUrl.startsWith('http://') && !reviewData.imageUrl.startsWith('https://')) {
        return 'Please provie a valid image URL'
    }
    if (reviewData.summary.length < summaryLength) {
        return `Summary should be at least ${summaryLength} characters long`
    }
    if (reviewData.description.length < descriptionLength) {
        return `Description should be at least ${descriptionLength} characters long`
    }
}

function validateChange(editFormValue, oldReviewData) {
    if (
        editFormValue.title === oldReviewData.title &&
        editFormValue.imageUrl === oldReviewData.imageUrl &&
        editFormValue.summary === oldReviewData.summary &&
        editFormValue.description === oldReviewData.description
    ) {
        return true
    }
}