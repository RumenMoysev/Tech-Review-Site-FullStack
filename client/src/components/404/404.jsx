import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./404.css"

export default function Page404() {
    useEffect(() => {
        function moveBackground(e) {
            let x = e.clientX / 6
            let y = e.clientY / 6

            page404.style.backgroundPositionX = x + 'px'
            page404.style.backgroundPositionY = y + 'px'
        }

        window.addEventListener('mousemove', moveBackground)
        
        //Fix the bug
        return () => {
            window.removeEventListener('mousemove', moveBackground)
        }
    })

    return (
        <section id="page404" className="page404">
            <div className="content404">
                <h2>404</h2>
                <h4>Oops! Page not found</h4>
                <p>
                    The page you were looking for doesn't exist. 
                    You may have mistyped the address or the page may have been moved.
                </p>
                <Link to="/">Back To Home</Link>
            </div>
        </section>
    )
}