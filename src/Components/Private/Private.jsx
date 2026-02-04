import { Navigate } from "react-router";

function Private({ children }) {
    const isLoggedIn = localStorage.getItem("token");
    
    if (isLoggedIn !== null) {
        return <>{ children }</>
    } else {
        return <Navigate to={"/login"} />
    }
}

export default Private;