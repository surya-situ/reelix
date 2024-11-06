import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import appStore from "./store/store";

function App() {

  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  )
}

export default App
