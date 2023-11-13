import { getAuth } from "./sessionStorageService.js"

const baseUrl = 'http://localhost:3030'

const titleLength = 6
const summaryLength = 10
const descriptionLength = 20

export function addReview(reviewData, setError) {
    const error = validateData(reviewData)

    if(error) {
        return setError(error)
    } else {
        setError(undefined)
    }

    const authToken = getAuth()

    if(!authToken) {
        return setError('You need to be logged in to add a review')
    }

    const settings = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "X-Authorization": authToken
        },
        body: JSON.stringify(reviewData)
    }

    return fetch(`${baseUrl}/data/reviews`, settings)
}

export function editReview(reviewData, setError, reviewId) {
    const error = validateData(reviewData)

    if (error) {
        return setError(error)
    } else {
        setError(undefined)
    }

    const authToken = getAuth()

    if (!authToken) {
        return setError('You need to be logged in to edit a review')
    } 

    const settings = {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            "X-Authorization": authToken
        },
        body: JSON.stringify(reviewData)
    }

    return fetch(`${baseUrl}/data/reviews/${reviewId}`, settings)
}

export function getEditData(reviewId) {
    const authToken = getAuth()
    let settings = undefined

    if (authToken) {
        settings = {
            method: "GET",
            headers: {'X-Authorization': authToken}
        }
    } else {
        settings = {
            method: "GET"
        }
    }

    return fetch(`http://localhost:3030/data/reviews/${reviewId}/all-data`, settings)
}

export function deleteReview(reviewId) {
    const authToken = getAuth()

    const settings = {
        method: "DELETE",
        headers: { "X-Authorization": authToken }
    }

    return fetch(`${baseUrl}/data/reviews/${reviewId}`, settings)
}

export function getDetails(reviewId) {
    const authToken = getAuth()

    let settings = undefined

    if(authToken) {
        settings = {
            method: "GET",
            headers: { "X-Authorization": authToken }
        }
    } else {
        settings = {
            method: "GET",
        }
    }

    return fetch(`${baseUrl}/data/reviews/${reviewId}`, settings)
}

export function likeReview(reviewId) {
    const authToken = getAuth()

    const settings = {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': authToken
        },
    }

    return fetch(`${baseUrl}/data/reviews/${reviewId}/like`, settings)
}

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