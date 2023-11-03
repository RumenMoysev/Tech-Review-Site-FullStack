export default function Themes({allThemes, defaultTheme, setDefaultTheme}) {

    function hoverOnTheme(e) {
        const changedShadow = document.querySelector(".colorsContainer");
        changedShadow.style.setProperty("--theme-color", allThemes[e.target.id].themeColor);
    };

    function unHoverTheme() {
        const changedShadow = document.querySelector(".colorsContainer");
        changedShadow.style.setProperty("--theme-color", defaultTheme);
    };

    function onclickChangeTheme(e) {
        const id = e.target.id;

        const selectedTheme = allThemes[id].themeColor;
        setDefaultTheme(selectedTheme)

        const themes = {
            selectedTheme: selectedTheme,
            buttonColor: allThemes[id].buttonColor,
            buttonHoverColor: allThemes[id].buttonHoverColor,
            buttonActiveColor: allThemes[id].buttonActiveColor,
            logo: allThemes[id].logo,
        };

        body.style.setProperty("--theme-color", themes.selectedTheme);
        body.style.setProperty("--button-color", themes.buttonColor);
        body.style.setProperty("--button-hover-color", themes.buttonHoverColor);
        body.style.setProperty("--button-active-color", themes.buttonActiveColor);
        homeNavIcon.src = themes.logo;

        localStorage.setItem('themes', JSON.stringify(themes));
    };

    return (
        <div className="colorsContainer">
            <p>Choose a theme</p>
            <ul>
                <li className="themePreview">
                    <img
                        id="green"
                        src="images/colors/Green.webp"
                        alt="green"
                        onMouseEnter={hoverOnTheme}
                        onMouseLeave={unHoverTheme}
                        onClick={onclickChangeTheme}
                    />
                </li>
                <li className="themePreview">
                    <img
                        id="blue"
                        src="images/colors/Solid_blue.svg.png"
                        alt="blue"
                        onMouseEnter={hoverOnTheme}
                        onMouseLeave={unHoverTheme}
                        onClick={onclickChangeTheme}
                    />
                </li>
                <li className="themePreview">
                    <img
                        id="yellow"
                        src="images/colors/naples-yellow-painted-swatch.jpg"
                        alt="yellow"
                        onMouseEnter={hoverOnTheme}
                        onMouseLeave={unHoverTheme}
                        onClick={onclickChangeTheme}
                    />
                </li>
                <li className="themePreview">
                    <img
                        id="red"
                        src="images/colors/red-color-solid-background-1920x1080.png"
                        alt="red"
                        onMouseEnter={hoverOnTheme}
                        onMouseLeave={unHoverTheme}
                        onClick={onclickChangeTheme}
                    />
                </li>
            </ul>
        </div>
    )
}