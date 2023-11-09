import { useNavigate } from "react-router-dom"

export default function Logo() {
    const navigate = useNavigate()

    function onClickHomePageRedirect() {
        navigate('/')
    }

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

