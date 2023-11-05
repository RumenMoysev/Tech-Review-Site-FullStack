import { useState } from "react";
import { loginService } from "../services/userService.js";
import { saveUserData } from "../services/sessionStorageService.js";

export default function Login({setIsAuth}) {

    const [error, setError] = useState(undefined)

    async function loginHandler(e) {
        e.preventDefault()

        const formData = new FormData(e.target.parentElement)

        const response = await loginService(formData)
        const json = await response.json()

        if(!response.ok) {
            return setError(json.message)
        } else {
            setError(undefined)
        }

        saveUserData(json)
        setIsAuth(true)
    }

    return (
        <section id="loginPage" className="hidden">
            <div className="form-container">
                <div className="formHeaders">
                    <h2>Login</h2>
                    {error && <h4>{error}</h4>}
                </div>
                <form id="loginForm">
                    <label htmlFor="emailInput">Email</label>
                    <input
                        id="emailInput"
                        className="good"
                        placeholder="Example: monkey@banana.com"
                        name="email"
                        type="email"
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
                    <div className="rememberMe-container">
                        <label
                            htmlFor="logRegCheckbox"
                            className="logRegCheckbox">
                            Remember me?
                        </label>
                        <input type="checkbox" id="logRegCheckbox" />
                    </div>
                    <button type="submit" id="buttons" onClick={loginHandler}>
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}