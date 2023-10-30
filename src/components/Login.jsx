export default function Login() {
    return (
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
                    <div className="rememberMe-container">
                        <label
                            htmlFor="logRegCheckbox"
                            className="logRegCheckbox">
                            Remember me?
                        </label>
                        <input type="checkbox" id="logRegCheckbox" />
                    </div>
                    <button type="submit" id="buttons">
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}