import { Provider } from "react-redux";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import LoginPage from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import store from "./Store/index";
import AppRoutes from "./Routes/App_routes";

function App() {
  return (
    <>
      <Provider store={store}>
       <AppRoutes/>
      </Provider>
    </>
  );
}

export default App;
