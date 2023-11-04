import { useEffect } from "react"
import Logo from "./HeaderComponents/Logo.jsx";
import ThemesAndContact from "./HeaderComponents/ThemesAndContact.jsx";
import "./Header.css"
import NavLinks from "./HeaderComponents/navLinks.jsx";

export default function Header({isAuth, setIsAuth}) {

    useEffect(() => {
        const authToken = sessionStorage.getItem('auth')
        const email = sessionStorage.getItem('email')
        const username = sessionStorage.getItem('username')
        const userId = sessionStorage.getItem('userId')

        if(authToken && email && username && userId) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [isAuth])

    return (
        <header id="header">
            <Logo></Logo>

            <NavLinks isAuth={isAuth}></NavLinks>

            <ThemesAndContact></ThemesAndContact>
        </header>
    )
}