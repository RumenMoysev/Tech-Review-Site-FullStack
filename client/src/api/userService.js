const baseUrl = 'http://localhost:3030/users'

const emailLength = 7
const usernameLength = 5
const passwordLength = 5

export function registerService(userData, setError) {
    let error = undefined
    const invalidFields = {}

    if (userData.email.length < emailLength) {
        invalidFields.email = true
        error = `Email should be at least ${emailLength} characters long!`
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