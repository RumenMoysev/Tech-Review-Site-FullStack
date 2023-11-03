import { useEffect } from "react"
import Logo from "./HeaderComponents/Logo.jsx";
import ThemesAndContact from "./HeaderComponents/ThemesAndContact.jsx";
import "./Header.css"

export default function Header() {
    return (
        <header id="header">

            <Logo></Logo>

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

            <ThemesAndContact></ThemesAndContact>

        </header>
    )
}