import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard() {
    const { auth } = useContext(AuthContext)

    if(!auth.authToken) {
        return <Navigate to='/login'/>
    } 

    return <Outlet/>
}