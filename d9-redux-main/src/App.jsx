import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import FavouritesPage from "./components/FavouritesPage";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyNavbar></MyNavbar>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/:company" element={<CompanySearchResults />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
