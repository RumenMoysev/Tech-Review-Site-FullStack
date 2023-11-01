import { useEffect } from "react";
import './Header.css'

export default function ThemesAndContact() {

    useEffect(() => {
        setTheme();
    }, []);

    function setTheme() {
        const chosenTheme = JSON.parse(localStorage.getItem("themes"));
        
        if(chosenTheme) {
            defaultTheme = chosenTheme.selectedTheme;

            body.style.setProperty("--theme-color", chosenTheme.selectedTheme);
            body.style.setProperty("--button-color", chosenTheme.buttonColor);
            body.style.setProperty("--button-hover-color", chosenTheme.buttonHoverColor);
            body.style.setProperty("--button-active-color", chosenTheme.buttonActiveColor);
            homeNavIcon.src = chosenTheme.logo;
        } else {
            body.style.setProperty("--theme-color", allThemes.blue.themeColor);
            body.style.setProperty("--button-color", allThemes.blue.buttonColor);
            body.style.setProperty("--button-hover-color", allThemes.blue.buttonHoverColor);
            body.style.setProperty("--button-active-color", allThemes.blue.buttonActiveColor);
        }
    }

    return (
        <div className="themesAndContactContainer">
            <div className="themes">
                <button onClick={onclickShowThemes}>Themes</button>
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
            </div>
            <a href="/contact" className="cta">
                <button>Contact</button>
            </a>
        </div>
    );
};

let themesShown = false;

function onclickShowThemes(e) {
    if (!themesShown) {
        e.target.parentElement.children[1].style.display = "flex";
        themesShown = true;
    } else {
        e.target.parentElement.children[1].style.display = "none";
        themesShown = false;
    }
};

let defaultTheme = "#1e9bff";

const allThemes = {
    red: {
        themeColor: "red",
        buttonColor: "rgba(175, 0, 0, 1)",
        buttonHoverColor: "rgba(175, 0, 0, 0.7)",
        buttonActiveColor: "rgba(175, 0, 0, 0.4)",
        logo: "images/logoTred.png",
    },
    green: {
        themeColor: "green",
        buttonColor: "rgba(11, 116, 1, 1)",
        buttonHoverColor: "rgba(11, 116, 1, 0.7)",
        buttonActiveColor: "rgba(11, 116, 1, 0.4)",
        logo: "images/logoTgreen.png",
    },
    blue: {
        themeColor: "#1e9bff",
        buttonColor: "rgba(0, 136, 169, 1)",
        buttonHoverColor: "rgba(0, 136, 169, 0.7)",
        buttonActiveColor: "rgba(0, 136, 169, 0.4)",
        logo: "images/logoTblue.png",
    },
    yellow: {
        themeColor: "yellow",
        buttonColor: "rgba(199, 186, 10, 1)",
        buttonHoverColor: "rgba(199, 186, 10, 0.7)",
        buttonActiveColor: "rgba(199, 186, 10, 0.4)",
        logo: "images/logoTyellow.png",
    },
};

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
    defaultTheme = selectedTheme;

    const themes = {
        selectedTheme: defaultTheme,
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