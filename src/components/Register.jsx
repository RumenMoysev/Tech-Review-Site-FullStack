import { useState } from "react"
import { registerService } from "../services/userService.js"

export default function Register({setIsAuth}) {
    const [error, setError] = useState(undefined)

    async function registerHandler(e) {
        e.preventDefault()

        const formData = new FormData(e.target.parentElement)

        const response = await registerService(formData, setError)
        const json = await response.json()

        if(!response.ok) {
            return setError(json.message)
        } else {
            setError(undefined)
        }
        
        sessionStorage.setItem('auth', json.authToken)
        sessionStorage.setItem('email', json.email)
        sessionStorage.setItem('username', json.username)
        sessionStorage.setItem('userId', json.userId)
        setIsAuth(true)
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