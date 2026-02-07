import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import Shop from "./Pages/Shop";
import LoginPage from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <Navbar/>
      <SignUp />
      <LoginPage />
      <Footer />
      
    </>
  );
}

export default App;
