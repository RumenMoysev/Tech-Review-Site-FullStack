export default function Logo() {
    return (
        <img
            className="homeNavIcon"
            id="homeNavIcon"
            src="images/logoTblue.png"
            alt="logo"
            onClick={onClickHomePageRedirect}
        />
    );
}

function onClickHomePageRedirect() {
    window.location.href = "/";
}