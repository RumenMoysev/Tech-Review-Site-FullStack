export default function Register() {
    return (
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
                        required
                    />
                    <label htmlFor="usernameInput">Username</label>
                    <input
                        id="usernameInput"
                        className="good"
                        placeholder="Example: KnightMaster4"
                        name="username"
                        required
                    />
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        id="passwordInput"
                        className="good"
                        placeholder="Example: 123abc"
                        name="password"
                        type="password"
                        required
                    />
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input
                        id="repeatPassword"
                        className="good"
                        placeholder="Repeat Your Password"
                        name="repeatPassword"
                        type="password"
                        required
                    />
                    <div className="rememberMe-container">
                        <label
                            htmlFor="logRegCheckbox1"
                            className="logRegCheckbox">
                            Remember me?
                        </label>
                        <input type="checkbox" id="logRegCheckbox1" />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </section>
    );
}