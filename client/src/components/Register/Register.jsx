import { useState } from "react"
import { registerService } from "../../api/userService.js"
import { saveUserData } from "../../api/sessionStorageService.js"

import "./Register.css"

const initialRegisterState = {
    email: '',
    username: '',
    password: '',
    repeatPassword: ''
}

//MOVE HANDLER TO FORM AND USE e.currentTarget
//USE ONBLUR EVENT FOR WARNING
export default function Register({setIsAuth}) {
    const [registerState, setRegisterState] = useState(initialRegisterState)
    const [error, setError] = useState(undefined)

    async function registerHandler(e) {
        e.preventDefault()

        const formData = registerState

        const response = await registerService(formData, setError)
        const json = await response.json()

        if(!response.ok) {
            return setError(json.message)
        } else {
            setError(undefined)
        }
        
        saveUserData(json)
        setIsAuth(true)
    }

    function registerValueHandler(e) {
        const name = e.target.name
        const value = e.target.value

        setRegisterState(state => ({
            ...state,
            [name]: value
        }))
    }

    return (
        <section id="registerPage" className="hidden registerPage">
            <div className="form-container">
                <div className="formHeaders">
                    <h2>Register</h2>
                    {error && <h4>{error}</h4>}
                </div>
                <form id="registerForm" className="registerForm" onSubmit={registerHandler}>
                    <label htmlFor="emailInput">Email</label>
                    <input
                        id="emailInput"
                        className="good emailInput"
                        placeholder="Example: monkey@banana.com"
                        name="email"
                        type="email"
                        value={registerState.email}
                        onChange={registerValueHandler}
                        required
                    />
                    <label htmlFor="usernameInput">Username</label>
                    <input
                        id="usernameInput"
                        className="good usernameInput"
                        placeholder="Example: KnightMaster4"
                        name="username"
                        value={registerState.username}
                        onChange={registerValueHandler}
                        required
                    />
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        id="passwordInput"
                        className="good passwordInput"
                        placeholder="Example: 123abc"
                        name="password"
                        type="password"
                        value={registerState.password}
                        onChange={registerValueHandler}
                        required
                    />
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input
                        id="repeatPassword"
                        className="good repeatPassword"
                        placeholder="Repeat Your Password"
                        name="repeatPassword"
                        type="password"
                        value={registerState.repeatPassword}
                        onChange={registerValueHandler}
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
                    <button type="submit">Register</button>
                </form>
            </div>
        </section>
    );
}