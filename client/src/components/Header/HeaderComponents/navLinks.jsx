import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"

import AuthContext from "../../../contexts/AuthContext.jsx"

export default function NavLinks() {
    const [username, setUsername] = useState('guest')
    const { auth, logoutSetAuthHandler } = useContext(AuthContext)

    useEffect(() => {
        const username = auth.username

        if(username) {
            setUsername(username)
        } else {
            setUsername('guest')
        }
    }, [auth])

    async function logoutHandler(e) {
        e.preventDefault()
        
        await fetch('http://localhost:3030/users/logout')
        logoutSetAuthHandler()
    }

    return (
        <nav id="navBar">
            <ul className="nav_links">
                <li className="welcome"><p>Welcome, {username !== 'guest' ? <Link to='myProfile'>{username} </Link> : username}</p> </li>

                {auth.authToken
                ?
                    <div id="userNavLinks">
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li><Link to="/add-review">Add Review</Link></li>
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