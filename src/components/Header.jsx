export default function Header() {
    return (
        <header id="header">
            <img
                className="homeNavIcon"
                id="homeNavIcon"
                src="images/logoTblue.png"
                alt="logo" />

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

            <div id="themesAndContact">
                <div className="themes">
                    <button>Themes</button>
                    <div className="colorsContainer">
                        <p>Choose a theme</p>
                        <ul>
                            <li className="themePreview">
                                <img
                                    id="green"
                                    src="images/colors/Green.webp"
                                    alt="green" />
                            </li>
                            <li className="themePreview">
                                <img
                                    id="blue"
                                    src="images/colors/Solid_blue.svg.png"
                                    alt="blue" />
                            </li>
                            <li className="themePreview">
                                <img
                                    id="yellow"
                                    src="images/colors/naples-yellow-painted-swatch.jpg"
                                    alt="yellow" />
                            </li>
                            <li className="themePreview">
                                <img
                                    id="red"
                                    src="images/colors/red-color-solid-background-1920x1080.png"
                                    alt="red" />
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="/contact" className="cta"><button>Contact</button></a>
            </div>
        </header>
    )
}