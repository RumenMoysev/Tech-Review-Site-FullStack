import internalFetch from "../lib/request.js"

const baseUrl = 'http://localhost:3030/users'

const emailLength = 7
const usernameLength = 5
const passwordLength = 5

export function registerService(userData, setError) {
    let error = undefined
    const invalidFields = {}
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/

    userData.email = userData.email.trim()
    userData.username = userData.username.trim()
    userData.password = userData.password.trim()
    userData.repeatPassword = userData.repeatPassword.trim()

    if (userData.email.length < emailLength || !regex.test(userData.email)) {
        invalidFields.email = true
        error = `Email should be valid and at least ${emailLength} characters long!`
    }
    if (userData.username.length < usernameLength) {
        invalidFields.username = true
        error ?  null : error = `Username should be at least ${usernameLength} characters long!`
    }
    if (userData.password.length < passwordLength) {
        invalidFields.password = true
        error ? null : error = `Password should be at least ${passwordLength} characters long!`
    }
    if (userData.password !== userData.repeatPassword || userData.repeatPassword.length < passwordLength) {
        invalidFields.repeatPassword = true
        error ? null : error = "Passwords do not match!"
    }

    if(error) {
        setError(error)
        return invalidFields
    } else {
        error = undefined
    }

    const settings = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userData)
    }

    return fetch(`${baseUrl}/register`, settings)
}

export function loginService(userData) {
    const settings = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userData)
    }

    return fetch(`${baseUrl}/login`, settings)
}

export const getUserData = (userId) => internalFetch('GET', `users/${userId}`)

export const getUserCreatedPosts = (userId) => internalFetch('GET', `users/${userId}/getCreatedReviews`)

export const getUserLikedPosts = (userId, authToken) => internalFetch('GET', `users/${userId}/getLikedReviews`, authToken)