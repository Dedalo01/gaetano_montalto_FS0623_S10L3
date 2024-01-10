import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import NavbarCustom from "./components/NavbarCustom";

import Footer from "./components/Footer";
import TVShows from "./components/TVShows";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarCustom />
      <Routes>
        <Route path="/" element={<TVShows />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
