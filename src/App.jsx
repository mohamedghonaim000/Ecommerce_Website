import { Provider } from "react-redux";
import AppRoutes from "./Routes/App_routes";
import store from "./Store";

function App() {
  return (
    <>
    <Provider store={store}>


      <AppRoutes />

      

    </Provider>
    </>
  );
}

export default App;
