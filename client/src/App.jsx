import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import { AuthContext } from "./contexts/AuthContext.js"

import Articles from "./components/Reviews/Reviews.jsx"
import Details from "./components/Details/Details.jsx"
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import Login from "./components/Login/Login.jsx"
import Register from "./components/Register/Register.jsx"
import Edit from "./components/EditReview/EditReview.jsx"
import AddReview from "./components/AddReview/AddReview.jsx"
import Page404 from "./components/404/404.jsx"

function App() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const options = {
            rootMargin: "-35% 0px -8% 0px",
            // threshold: 0.3
        };

        const observer = new IntersectionObserver((e) => {
            e.forEach((el) => {
                if (el.isIntersecting) {
                    el.target.classList.add("show");
                } else {
                    el.target.classList.remove('show');
                }
            });
        }, options);

        const hiddenElems = document.querySelectorAll(".hidden");
        hiddenElems.forEach((el) => observer.observe(el));
    })

    function setIsAuthHandler(value) {
        setIsAuth(value)
    }

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth: setIsAuthHandler}}>
            <Header isAuth={isAuth} setIsAuth={setIsAuth}></Header>
            
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register isAuth={isAuth} setIsAuth={setIsAuth} />} />
                <Route path="/reviews" element={<Articles/>} />
                <Route path="/add-review" element={<AddReview isAuth={isAuth} />} />
                <Route path="/reviews/:reviewId" element={<Details/>} />
                <Route path="/reviews/:reviewId/edit" element={<Edit/>} />
                <Route path="*" element={<Page404/>} />
            </Routes>
        </AuthContext.Provider>
    )
}

export default App