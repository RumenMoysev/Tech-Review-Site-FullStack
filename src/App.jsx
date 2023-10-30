// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <>
      <header id="header">
            <img
                className="homeNavIcon"
                id="homeNavIcon"
                src="images/logoTblue.png"
                alt="logo" />

            <nav id="navBar">
                <ul className="nav_links">
                    <div id="userNavLinks">
                      <li><a href="/reviews">Reviews</a></li>
                    <li className="welcome"><p>Welcome, guest</p></li>
                    <li><a href="javascript:void(0)">Logout</a></li>
                    </div>
                <div id="guestNavLinks">
                        <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    </div>
                </ul>
            </nav>

            <div id="themesAndContact">
                <div className="themes">
                    <button>Themes</button>
                    <div className="colorsContainer">
                        <p>Choose a theme</p>
                        <ul>
                            <li className="themePreview">
                                <img
                                    id="green"
                                    src="images/colors/Green.webp"
                                    alt="green" />
                            </li>
                            <li className="themePreview">
                                <img
                                    id="blue"
                                    src="images/colors/Solid_blue.svg.png"
                                    alt="blue" />
                            </li>
                            <li className="themePreview">
                                <img
                                    id="yellow"
                                    src="images/colors/naples-yellow-painted-swatch.jpg"
                                    alt="yellow" />
                            </li>
                            <li className="themePreview">
                                <img
                                    id="red"
                                    src="images/colors/red-color-solid-background-1920x1080.png"
                                    alt="red" />
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="/contact" className="cta"><button>Contact</button></a>
            </div>
        </header>

        <section id="homePage">
            <div className="row">
                <div className="col hidden">
                    <h1>Tech Review Site</h1>
                    <p>This is the place where you can find all information
                        you're looking for in the latest tech word!
                    </p>
                    <button>Reviews</button>
                </div> 
                <div className="col notTouching">
                    <div className="card hidden" style={{backgroundImage: 'url(https://images.samsung.com/is/image/samsung/p6pim/uk/feature/164370272/uk-feature-galaxy-s-535141640?$FB_TYPE_I_JPG$)'}}>
                        <h4>S23 Ultra Review</h4>
                        <p>In this article we will look at some categories and see
                        if the Galaxy S23 Ultra is worth buying.</p>
                    </div>
                    <div className="card hidden" style={{backgroundImage: 'url(https://www.digitaltrends.com/wp-content/uploads/2023/09/apple-iphone-15-pro-max-vs-samsung-galaxy-s23-ultra.jpg?fit=720%2C479&p=1)'}}>
                        <h4>S23 Ultra Review</h4>
                        <p>In this article we will look at some categories and see
                        if the Galaxy S23 Ultra is worth buying.</p>
                    </div>
                    <h2>No reviews yet!</h2>
                </div>
            </div>
        </section>

        <section id="loginPage" className="hidden">
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

        <section id="registerPage" className="hidden">
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

        <section id="articles" className="hidden">
            <article className="hidden">
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
            <article className="hidden">
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
            <article className="hidden">
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
            <article className="hidden">
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

        <section id="details" className="hidden">
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
