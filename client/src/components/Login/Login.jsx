import { useState } from "react";
import { loginService } from "../../api/userService.js";
import { saveUserData } from "../../api/sessionStorageService.js";

import "./Login.css"

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
        <section id="loginPage" className="hidden loginPage">
            <div className="form-container">
                <div className="formHeaders">
                    <h2>Login</h2>
                    {error && <h4>{error}</h4>}
                </div>
                <form id="loginForm" className="loginForm">
                    <label htmlFor="emailInput">Email</label>
                    <input
                        id="emailInput"
                        className="good emailInput"
                        placeholder="Example: monkey@banana.com"
                        name="email"
                        type="email"
                        required
                    />
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        id="passwordInput"
                        className="good passwordInput"
                        placeholder="Example: 123abc"
                        name="password"
                        type="password"
                        required
                    />
                    <div className="rememberMe-container">
                        <label
                            htmlFor="logRegCheckbox"
                            className="logRegCheckbox1">
                            Remember me?
                        </label>
                        <input type="checkbox" id="logRegCheckbox" className="logRegCheckbox"/>
                    </div>
                    <button type="submit" id="buttons" onClick={loginHandler}>
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}