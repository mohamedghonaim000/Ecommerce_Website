import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("token");

  if (isLoggedIn !== null) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
