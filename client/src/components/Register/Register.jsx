import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"

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
export default function Register({isAuth, setIsAuth}) {
    const [registerState, setRegisterState] = useState(initialRegisterState)
    const [error, setError] = useState(undefined)
    const [invalidFields, setInvalidFields] = useState({})

    const navigate = useNavigate()

    async function registerHandler(e) {
        e.preventDefault()

        const formData = registerState

        let response = registerService(formData, setError)

        if(response instanceof Promise) {
            response = await response
            const json = await response.json()

            if (!response.ok) {
                return setError(json.message)
            } else {
                setError(undefined)
            }

            saveUserData(json)
            setIsAuth(true)
            navigate('/')
        } else {
            setInvalidFields({...response});
        }
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
                        className={`good emailInput ${invalidFields.email && 'warning'}`}
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
                        className={`good usernameInput ${invalidFields.username && 'warning'}`}
                        placeholder="Example: KnightMaster4"
                        name="username"
                        value={registerState.username}
                        onChange={registerValueHandler}
                        required
                    />
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        id="passwordInput"
                        className={`good passwordInput ${invalidFields.password && 'warning'}`}
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
                        className={`good repeatPassword ${invalidFields.repeatPassword && 'warning'}`}
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