import { useEffect, useState } from "react"

import Articles from "./components/Articles/Articles.jsx"
import Details from "./components/Details.jsx"
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home.jsx"
import Login from "./components/Login/Login.jsx"
import Register from "./components/Register/Register.jsx"
import Edit from "./components/Edit/Edit.jsx"

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
                el.target.classList.remove('show')
            }
        });
    }, options);

    const hiddenElems = document.querySelectorAll(".hidden");
    hiddenElems.forEach((el) => observer.observe(el));
  })

  return (
    <>
      <Header isAuth={isAuth} setIsAuth={setIsAuth}></Header>
      <Home></Home>
      <Login setIsAuth={setIsAuth}></Login>
      <Register setIsAuth={setIsAuth}></Register>
      <Articles></Articles>
      <Details></Details>
      <Edit></Edit>
    </>
  )
}

export default App