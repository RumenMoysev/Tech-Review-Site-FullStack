import { getAuth } from "./sessionStorageService.js"

const baseUrl = 'http://localhost:3030'

const titleLength = 6
const summaryLength = 10
const descriptionLength = 20

export function addReview(reviewData, setError) {
    if (reviewData.title.length < titleLength) {
        return setError(`Title should be at least ${ titleLength } characters long`)
    }
    // if (!reviewData.imageUrl.startsWith('http://') && !reviewData.imageUrl.startsWith('https://')) {
    //     return setError('Please provie a valid image URL')
    // }
    if (reviewData.summary.length < summaryLength) {
        return setError(`Summary should be at least ${summaryLength} characters long`)
    }
    if (reviewData.description.length < descriptionLength) {
        return setError(`Description should be at least ${descriptionLength} characters long`)
    } else {
        setError(undefined)
    }

    const authToken = getAuth()

    if(!authToken) {
        return setError('You need to be logged in to add a review')
    }

    const settings = {
        method: "POST",
        headers: { "Content-type": "application/json",
                    "X-Authorization": authToken},
        body: JSON.stringify(reviewData)
    }

    return fetch(`${baseUrl}/data/reviews`, settings)
}

export function editReview(reviewData, setError) {
    if (reviewData.title.length < titleLength) {
        return setError(`Title should be at least ${titleLength} characters long`)
    }
    if (!reviewData.imageUrl.startsWith('http://') && !reviewData.imageUrl.startsWith('https://')) {
        return setError('Please provie a valid image URL')
    }
    if (reviewData.summary.length < summaryLength) {
        return setError(`Summary should be at least ${summaryLength} characters long`)
    }
    if (reviewData.description.length < descriptionLength) {
        return setError(`Description should be at least ${descriptionLength} characters long`)
    } else {
        setError(undefined)
    }

    const authToken = getAuth()

    if (!authToken) {
        return setError('You need to be logged in to add a review')
    }

    // const settings = {
    //     method: "PUT",
    //     headers: {
    //         "Content-type": "application/json",
    //         "X-Authorization": authToken
    //     },
    //     body: JSON.stringify(reviewData)
    // }

    // return fetch(`${baseUrl}/data/reviews`, settings)
}