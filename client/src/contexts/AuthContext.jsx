import { createContext } from "react";

import usePersistedState from "../hooks/userPersistedState.js";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = usePersistedState('auth', {})

    function loginSetAuthHandler(data) {
        setAuth(data)
    }

    function logoutSetAuthHandler() {
        setAuth({})
    }

    const values = {
        auth,
        loginSetAuthHandler,
        logoutSetAuthHandler
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext