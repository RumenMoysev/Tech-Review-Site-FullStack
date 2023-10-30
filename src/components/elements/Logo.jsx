import { useEffect } from "react";

export default function Logo() {
    useEffect(() => {
        document.querySelector('.homeNavIcon').addEventListener('click', onClickHomePageRedirect)
    })

    return (
        <img
            className="homeNavIcon"
            id="homeNavIcon"
            src="images/logoTblue.png"
            alt="logo"
        />
    );
}

function onClickHomePageRedirect() {
    window.location.href = "/";
}