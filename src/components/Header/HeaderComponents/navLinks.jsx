import { useEffect, useState } from "react"

export default function NavLinks({isAuth, setIsAuth}) {
    const [username, setUsername] = useState('guest')

    useEffect(() => {
        const username = sessionStorage.getItem('username')

        if(username) {
            setUsername(username)
        } else {
            setUsername('guest')
        }
    }, [isAuth])

    function logoutHandler(e) {
        e.preventDefault()
        
        sessionStorage.removeItem('auth')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('userId')

        setIsAuth(false)
    }

    return (
        <nav id="navBar">
            <ul className="nav_links">
                {isAuth
                ?
                    <div id="userNavLinks">
                        <li><a href="/reviews">Reviews</a></li>
                        <li className="welcome"><p>Welcome, {username}</p></li>
                        <li><a href="" onClick={logoutHandler}>Logout</a></li>
                    </div>
                :
                    <div id="guestNavLinks">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </div>
                }
            </ul>
        </nav>
    )
}