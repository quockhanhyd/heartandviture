// import Header from "./layouts/header";
// import Footer from "./layouts/footer";
import AppRouter from "./routers";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
