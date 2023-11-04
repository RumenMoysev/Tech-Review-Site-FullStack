import { useState } from "react"

const emailLength = 7
const usernameLength = 5
const passwordLength = 5

export default function Register() {

    const [error, setError] = useState(undefined)

    async function registerHandler(e) {
        e.preventDefault()

        const formData = new FormData(e.target.parentElement)

        const userData = {
            email: formData.get('email'),
            username: formData.get('username'),
            password: formData.get('password'),
            repeatPassword: formData.get('repeatPassword')
        }

        if(userData.email.length < emailLength) {
            return setError(`Email should be at least ${emailLength} characters long!`)
        } else if(userData.username.length < usernameLength) {
            return setError(`Username should be at least ${usernameLength} characters long!`)
        } else if(userData.password.length < passwordLength) {
            return setError(`Password should be at least ${passwordLength} characters long!`)
        } else if(userData.password !== userData.repeatPassword) {
            return setError("Passwords do not match!")
        }

        const settings = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(userData)
        }

        await fetch('http://localhost:3030/users/register', settings)
    }

    return (
        <section id="registerPage" className="hidden">
            <div className="form-container">
                <div className="formHeaders">
                    <h2>Register</h2>
                    {error && <h4>{error}</h4>}
                </div>
                <form id="registerForm">
                    <label htmlFor="emailInput">Email</label>
                    <input
                        id="emailInput"
                        className="good"
                        placeholder="Example: monkey@banana.com"
                        name="email"
                        type="email"
                        required
                    />
                    <label htmlFor="usernameInput">Username</label>
                    <input
                        id="usernameInput"
                        className="good"
                        placeholder="Example: KnightMaster4"
                        name="username"
                        required
                    />
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        id="passwordInput"
                        className="good"
                        placeholder="Example: 123abc"
                        name="password"
                        type="password"
                        required
                    />
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input
                        id="repeatPassword"
                        className="good"
                        placeholder="Repeat Your Password"
                        name="repeatPassword"
                        type="password"
                        required
                    />
                    <div className="rememberMe-container">
                        <label
                            htmlFor="logRegCheckbox1"
                            className="logRegCheckbox">
                            Remember me?
                        </label>
                        <input type="checkbox" id="logRegCheckbox1" />
                    </div>
                    <button type="submit" onClick={registerHandler} >Register</button>
                </form>
            </div>
        </section>
    );
}