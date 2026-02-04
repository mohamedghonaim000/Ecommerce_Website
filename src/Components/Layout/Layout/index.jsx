import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router";
import Private from "../../Private/Private";

function Layout() {
    return (
        <>
            <Navbar />
            <Private>
                <Outlet />
            </Private>
            <Footer />
        </>
    );
}

export default Layout;