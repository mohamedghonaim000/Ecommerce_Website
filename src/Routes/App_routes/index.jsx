import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../../Pages/Home";
import Layout from "../Layout";
import Contact from "../../Pages/ContactUs";
import About from "../../Pages/About";
import LoginPage from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";
import Private from "../Private/Private";
import NotFound from './../../Pages/NotFound/index';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Private><Contact /></Private>,
      },
      {
        path: "/about",
        element: <Private><About /></Private>,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/*",
        element: <NotFound/>,
      },
    ],
  },
]);

function AppRoutes() {
  return <RouterProvider router={routes} />;
}

export default AppRoutes;
