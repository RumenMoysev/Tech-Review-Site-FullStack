import { useEffect } from "react";


export default function ThemesAndContact() {

    useEffect(() => {
        document.querySelector(".themes button").addEventListener("click", onclickShowThemes);
    });

    useEffect(() => {
        setTheme()
    })

    useEffect(() => {
        let themeContainer = document.querySelector(".colorsContainer");
        themeContainer.style.setProperty("--theme-color", defaultTheme);

        let themes = document.querySelectorAll(".colorsContainer li img");

        for (let el of themes) {
            el.addEventListener("mouseenter", hoverOnTheme);
            el.addEventListener("mouseleave", unHoverTheme);
            el.addEventListener("click", onclickChangeTheme);
        }
    });

    return (
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
                                alt="green"
                            />
                        </li>
                        <li className="themePreview">
                            <img
                                id="blue"
                                src="images/colors/Solid_blue.svg.png"
                                alt="blue"
                            />
                        </li>
                        <li className="themePreview">
                            <img
                                id="yellow"
                                src="images/colors/naples-yellow-painted-swatch.jpg"
                                alt="yellow"
                            />
                        </li>
                        <li className="themePreview">
                            <img
                                id="red"
                                src="images/colors/red-color-solid-background-1920x1080.png"
                                alt="red"
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
}

let themesShown = false;

function onclickShowThemes(e) {
    if (!themesShown) {
        e.target.parentElement.children[1].style.display = "flex";
        themesShown = true;
    } else {
        e.target.parentElement.children[1].style.display = "none";
        themesShown = false;
    }
}

let defaultTheme = "#1e9bff";

const chosenTheme = JSON.parse(localStorage.getItem('themes'))

function setTheme() {

    if(chosenTheme) {
        defaultTheme = chosenTheme.theme

        body.style.setProperty("--theme-color", chosenTheme.theme);
        body.style.setProperty("--button-color", chosenTheme.buttonColor);
        body.style.setProperty("--button-hover-color", chosenTheme.buttonHoverColor);
        body.style.setProperty("--button-active-color", chosenTheme.buttonActiveColor);
        homeNavIcon.src = chosenTheme.logo;
    }
}

const themeLogos = {
    red: "images/logoTred.png",
    green: "images/logoTgreen.png",
    blue: "images/logoTblue.png",
    yellow: "images/logoTyellow.png",
};

const themeButtonColors = {
    red: ["rgba(175, 0, 0, 1)", "rgba(175, 0, 0, 0.7)", "rgba(175, 0, 0, 0.4)"],
    green: ["rgba(11, 116, 1, 1)", "rgba(11, 116, 1, 0.7)", "rgba(11, 116, 1, 0.4)"],
    blue: ["rgba(0, 136, 169, 1)", "rgba(0, 136, 169, 0.7)", "rgba(0, 136, 169, 0.4)"],
    yellow: ["rgba(199, 186, 10, 1)", "rgba(199, 186, 10, 0.7)", "rgba(199, 186, 10, 0.4)"],
};

const themeColors = {
    red: "red",
    green: "green",
    blue: "#1e9bff",
    yellow: "yellow",
};

// const body = document.querySelector('body')

function hoverOnTheme(e) {
    let changedShadow = document.querySelector(".colorsContainer");
    changedShadow.style.setProperty("--theme-color", themeColors[e.target.id]);
}

function unHoverTheme() {
    let changedShadow = document.querySelector(".colorsContainer");
    changedShadow.style.setProperty("--theme-color", defaultTheme);
}

function onclickChangeTheme(e) {
    const id = e.target.id;
    let theme = themeColors[id];
    defaultTheme = theme;
    body.style.setProperty("--theme-color", defaultTheme);
    body.style.setProperty("--button-color", themeButtonColors[id][0]);
    body.style.setProperty("--button-hover-color", themeButtonColors[id][1]);
    body.style.setProperty("--button-active-color", themeButtonColors[id][2]);
    homeNavIcon.src = themeLogos[id];

    const themes = {
        theme: defaultTheme,
        buttonColor: themeButtonColors[id][0],
        buttonHoverColor: themeButtonColors[id][1],
        buttonActiveColor: themeButtonColors[id][2],
        logo: themeLogos[id],
    };

    localStorage.setItem('themes', JSON.stringify(themes))
}