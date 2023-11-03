// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useEffect } from "react"

import Articles from "./components/Articles.jsx"
import Details from "./components/Details.jsx"
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"

function App() {
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
                el.target.classList.remove('show')
            }
        });
    }, options);

    const hiddenElems = document.querySelectorAll(".hidden");
    hiddenElems.forEach((el) => observer.observe(el));
  })

  return (
    <>
        <Header></Header>
        <Home></Home>
        <Login></Login>
        <Register></Register>
        <Articles></Articles>
        <Details></Details>
    </>
  )
}

export default App