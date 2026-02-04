import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../../Components/Layout/Layout";
import Home from "../../Pages/Home";
import Cart from "../../Pages/Cart";
import Favorites from "../../Pages/Favourit";
import Shop from "../../Pages/Shop";
import Contact from "../../Pages/ContactUs";
import About from "../../Pages/About";
import LoginPage from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";
import NotFound from "../../Pages/NotFound";
import Categories from "../../Pages/Categories";
import Products from "../../Pages/Products";

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
                path: "/home",
                element: <Home />
            },
            {
                path: "/categories",
                element: <Categories />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
]);

function AppRoutes() {
    return (
        <RouterProvider router={router} />
    );
}

export default AppRoutes;