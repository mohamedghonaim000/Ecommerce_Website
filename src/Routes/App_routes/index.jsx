import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../../Pages/Home";
import Layout from "../Layout";
import Contact from "../../Pages/ContactUs";
import About from "../../Pages/About";
import LoginPage from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";
import RouteError from "../error/RoutesError";
import ProtectedRoute from "../Private/ProtectedRoute";
import ProductDetails from "../../Pages/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <ProductDetails/>,
      },
      {
        path: "/contact",
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
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
        element: (
          <RouteError
            status="404"
            message="Page Not Found"
            description="The page you are looking for does not exist."
          />
        ),
      },
    ],
  },
]);

function AppRoutes() {
  return <RouterProvider router={routes} />;
}

export default AppRoutes;
