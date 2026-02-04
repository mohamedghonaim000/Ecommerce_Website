import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Layout/Footer";
import { Outlet } from "react-router";
import Private from "../Private/Private";

function Layout() {
    return (
        <>
            <Navbar />
                <Outlet />
            <Footer />
        </>
    );
}

export default Layout;