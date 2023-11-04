import { useState, useEffect } from "react"

export default function NavLinks() {

    

    return (
        <nav id="navBar">
            <ul className="nav_links">
                <div id="userNavLinks">
                    <li><a href="/reviews">Reviews</a></li>
                    <li className="welcome"><p>Welcome, guest</p></li>
                    <li><a href="javascript:void(0)">Logout</a></li>
                </div>
                <div id="guestNavLinks">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </div>
            </ul>
        </nav>
    )
}