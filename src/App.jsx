// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"

function App() {
  return (
    <>
        <Header></Header>
        <Home></Home>

        <section id="loginPage" className="">
            <div className="form-container">
                <div className="formHeaders">
                    <h2>Login</h2>
                    <h4>Invalid email!</h4>
                </div>
                <form id="loginForm">
                    <label htmlFor="emailInput">Email</label>
                    <input
                        id="emailInput"
                        className="good"
                        placeholder="Example: monkey@banana.com"
                        name="email"
                        type="email"
                        required />
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        id="passwordInput"
                        className="good"
                        placeholder="Example: 123abc"
                        name="password"
                        type="password"
                        required />
                    <div className="rememberMe-container">
                        <label htmlFor="logRegCheckbox" className="logRegCheckbox">Remember me?</label>
                        <input type="checkbox" id="logRegCheckbox" />
                    </div>
                    <button type="submit" id="buttons">Login</button>
                </form>
            </div>
        </section>

        <section id="registerPage" className="">
            <div className="form-container">
                <div className="formHeaders">
                    <h2>Register</h2>
                    <h4>Invalid email!</h4>
                </div>
                <form id="registerForm">
                    <label htmlFor="emailInput">Email</label>
                    <input
                        id="emailInput"
                        className="good"
                        placeholder="Example: monkey@banana.com"
                        name="email"
                        type="email"
                        required />
                    <label htmlFor="usernameInput">Username</label>
                    <input
                        id="usernameInput"
                        className="good"
                        placeholder="Example: KnightMaster4"
                        name="username"
                        required />
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        id="passwordInput"
                        className="good"
                        placeholder="Example: 123abc"
                        name="password"
                        type="password"
                        required />
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input
                        id="repeatPassword"
                        className="good"
                        placeholder="Repeat Your Password"
                        name="repeatPassword"
                        type="password"
                        required />
                    <div className="rememberMe-container">
                        <label htmlFor="logRegCheckbox1" className="logRegCheckbox">Remember me?</label>
                        <input type="checkbox" id="logRegCheckbox1" />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </section>

        <section id="articles" className="">
            <article className="">
                <h2>Should you buy the Galaxy S23 Ultra?</h2>
                <div className="pImgContainer">
                    <p>
                        In this article we will look at some categories and see
                        if the Galaxy S23 Ultra is worth buying.
                    </p>
                    <button><a href="/S23Ultra">Details</a></button>
                </div>
                <img
                    src="https://images.samsung.com/is/image/samsung/p6pim/uk/feature/164370272/uk-feature-galaxy-s-535141640?$FB_TYPE_I_JPG$"
                    alt="picture" />
            </article>
            <article className="">
                <h2>Should you buy the Iphone 14 Pro Max?</h2>
                <div className="pImgContainer">
                    <p>
                        In this article we will look at some categories and see
                        if the Iphone 14 Pro Max is worth buying.
                    </p>
                    <button><a href="/S23Ultra">Details</a></button>
                </div>
                <img
                    src="https://cdn11.bigcommerce.com/s-53cwszo4/images/stencil/2048x2048/products/1098/7283/14_pro_black_front__59165.1663003197.jpg?c=2"
                    alt="picture" />
            </article>
            <article className="">
                <h2>Iphone 14 Pro Max vs Galaxy S23 Ultra</h2>
                <div className="pImgContainer">
                    <p>
                        In this article we will look at the main differences
                        between the Iphone 14 Pro Max and the Galaxy S23 Ultra
                        and see which one suits you best.
                    </p>
                    <button><a href="/S23Ultra">Details</a></button>
                </div>
                <img
                    src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Samsung_Galaxy_S23_Ultra_vs_Apple_iPhone_14_Pro_Max_drdNBC.jpg"
                    alt="picture" />
            </article>
            <article className="">
                <h2>Iphone 14 Pro Max vs Galaxy S23 Ultra</h2>
                <div className="pImgContainer">
                    <p>
                        In this article we will look at the main differences
                        between the Iphone 14 Pro Max and the Galaxy S23 Ultra
                        and see which one suits you best.
                    </p>
                    <button><a href="/S23Ultra">Details</a></button>
                </div>
                <img
                    src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Samsung_Galaxy_S23_Ultra_vs_Apple_iPhone_14_Pro_Max_drdNBC.jpg"
                    alt="picture" />
            </article>
        </section>

        <section id="details" className="">
            <div className="detailsContainer">
                <h2>Should you buy the Galaxy S23 Ultra?</h2>
                <img
                    src="https://images.samsung.com/is/image/samsung/p6pim/uk/feature/164370272/uk-feature-galaxy-s-535141640?$FB_TYPE_I_JPG$"
                    alt="picture" />

                <div className="pBtnContainer">
                    <p>
                        In this article we will look at some categories and
                        seeif the Galaxy S23 Ultra is worth buying.
                    </p>

                    <div className="detailsBtns">
                        <button><a href="/S23Ultra">Edit</a></button>
                        <button><a href="/ada">Delete</a></button>
                        <button><a href="/dada">Like</a></button>
                    </div>
                </div>

                <p className="likes">No likes yet</p>
            </div>
        </section>
    </>
  )
}

export default App
