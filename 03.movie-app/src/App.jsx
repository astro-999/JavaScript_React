import { Route, Routes } from "react-router-dom";
import Favourite from "./pages/Favourite";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
      <MovieProvider> 
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
