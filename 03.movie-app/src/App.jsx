import { Route, Routes } from "react-router-dom";
import Favourite from "./pages/Favourite";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />]
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
