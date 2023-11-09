import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import { getUsername, removeUserData } from "../../../api/sessionStorageService.js"

export default function NavLinks({isAuth, setIsAuth}) {
    const [username, setUsername] = useState('guest')

    useEffect(() => {
        const username = getUsername()

        if(username) {
            setUsername(username)
        } else {
            setUsername('guest')
        }
    }, [isAuth])

    async function logoutHandler(e) {
        e.preventDefault()
        
        await fetch('http://localhost:3030/users/logout')
        removeUserData()

        setIsAuth(false)
    }

    return (
        <nav id="navBar">
            <ul className="nav_links">
                {isAuth
                ?
                    <div id="userNavLinks">
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li className="welcome"><p>Welcome, {username}</p></li>
                        <li><a href="" onClick={logoutHandler}>Logout</a></li>
                    </div>
                :
                    <div id="guestNavLinks">
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </div>
                }
            </ul>
        </nav>
    )
}