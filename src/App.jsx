import { Provider } from "react-redux";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import LoginPage from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <SignUp />
        <LoginPage />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
