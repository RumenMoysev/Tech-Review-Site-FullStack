import Logo from "./HeaderComponents/Logo.jsx";
import ThemesAndContact from "./HeaderComponents/ThemesAndContact.jsx";
import "./Header.css"
import NavLinks from "./HeaderComponents/navLinks.jsx";

export default function Header() {

    return (
        <header id="header">
            <Logo></Logo>

            <NavLinks></NavLinks>

            <ThemesAndContact></ThemesAndContact>
        </header>
    )
}