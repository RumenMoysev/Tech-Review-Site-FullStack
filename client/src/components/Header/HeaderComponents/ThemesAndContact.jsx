import { useEffect, useState } from "react";
import Themes from "./Themes.jsx";

export default function ThemesAndContact() {

    const [showThemes, setShowThemes] = useState(false)
    const [defaultTheme, setDefaultTheme] = useState("#1e9bff")

    useEffect(() => {
        setTheme();
    }, []);

    function setTheme() {
        const chosenTheme = JSON.parse(localStorage.getItem("themes"));

        if (chosenTheme) {
            setDefaultTheme(chosenTheme.selectedTheme)

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
                <button onClick={() => setShowThemes(s => !s)}>Themes</button>
                {showThemes && (
                <Themes 
                    allThemes={allThemes}
                    defaultTheme={defaultTheme}
                    setDefaultTheme={setDefaultTheme} />
                )}
            </div>
            <a href="/contact" className="cta">
                <button>Contact</button>
            </a>
        </div>
    );
};

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