import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../../Pages/Home";
import Layout from "../../Components/Layout/Layout";
import Contact from "../../Pages/ContactUs";
import About from "../../Pages/About";
import LoginPage from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignUp />
    }
]);

function AppRoutes() {
    return (
        <RouterProvider router={router} />
    );
}

export default AppRoutes;