const baseUrl = 'http://localhost:3030/users'

const emailLength = 7
const usernameLength = 5
const passwordLength = 5

export function registerService(formData, setError) {
    const userData = {
        email: formData.get('email'),
        username: formData.get('username'),
        password: formData.get('password'),
        repeatPassword: formData.get('repeatPassword')
    }

    if (userData.email.length < emailLength) {
        return setError(`Email should be at least ${emailLength} characters long!`)
    } else if (userData.username.length < usernameLength) {
        return setError(`Username should be at least ${usernameLength} characters long!`)
    } else if (userData.password.length < passwordLength) {
        return setError(`Password should be at least ${passwordLength} characters long!`)
    } else if (userData.password !== userData.repeatPassword) {
        return setError("Passwords do not match!")
    } else {
        setError(undefined)
    }

    const settings = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userData)
    }

    return fetch(`${baseUrl}/register`, settings)
}

export function loginService(formData) {
    const userData = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    const settings = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userData)
    }

    return fetch(`${baseUrl}/login`, settings)
}