document.querySelector('.homeNavIcon').addEventListener('click',test)

function test() {
    window.location.href = '/'
}

let themesShown = false

document.querySelector(".themes button").addEventListener('click', onclickShowThemes);

function onclickShowThemes(e) {
    if(!themesShown) {
        e.target.parentElement.children[1].style.display = "flex";
        themesShown=true
    } else {
        e.target.parentElement.children[1].style.display = "none";
        themesShown=false
    }
}

const themeLogos = {
    red: 'images/logoTred.png',
    green: 'images/logoTgreen.png',
    blue: 'images/logoTblue.png',
    yellow: 'images/logoTyellow.png'
}

let defaultTheme = "#1e9bff";

const themeButtonColors = {
    red: ["rgba(175, 0, 0, 1)", "rgba(175, 0, 0, 0.7)", "rgba(175, 0, 0, 0.4)"],
    green: ["rgba(11, 116, 1, 1)", "rgba(11, 116, 1, 0.7)", "rgba(11, 116, 1, 0.4)"],
    blue: ["rgba(0, 136, 169, 1)", "rgba(0, 136, 169, 0.7)", "rgba(0, 136, 169, 0.4)"],
    yellow: ["rgba(199, 186, 10, 1)", "rgba(199, 186, 10, 0.7)", "rgba(199, 186, 10, 0.4)"]
}

const themeColors = {
  red: "red",
  green: "green",
  blue: "#1e9bff",
  yellow: "yellow",
};

// const body = document.querySelector('body')
// body.style.setProperty('--theme-color', defaultTheme)

let themeContainer = document.querySelector(".colorsContainer");
themeContainer.style.setProperty("--theme-color", defaultTheme);

let themes = document.querySelectorAll('.colorsContainer li img')

for (let el of themes) {
    el.addEventListener('mouseenter', hoverOnTheme)
    el.addEventListener('mouseleave', unHoverTheme )
    el.addEventListener('click', onclickChangeTheme)
}

function hoverOnTheme(e) {
    let changedShadow = document.querySelector('.colorsContainer')
    changedShadow.style.setProperty('--theme-color', themeColors[e.target.id])
}

function unHoverTheme(e) {
    let changedShadow = document.querySelector(".colorsContainer");
    changedShadow.style.setProperty("--theme-color", defaultTheme);
}

// const homeNavIcon = document.getElementById('homeNavIcon')

function onclickChangeTheme(e) {
    let id = e.target.id
    let theme = themeColors[id]
    defaultTheme = theme
    body.style.setProperty("--theme-color", defaultTheme)
    body.style.setProperty("--button-color", themeButtonColors[id][0])
    body.style.setProperty("--button-hover-color", themeButtonColors[id][1])
    body.style.setProperty("--button-active-color", themeButtonColors[id][2])
    homeNavIcon.src = themeLogos[id]
}