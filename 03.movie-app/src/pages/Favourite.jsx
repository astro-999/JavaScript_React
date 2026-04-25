import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";


function favourite() {
  const { favorites } = useMovieContext();
  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favourite Movies</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  } 
  return (
    <div className="favorites-empty">
      <h2>No Favourite Movies</h2>
      <p>You haven't added any movies to your favourites yet.</p>
    </div>
  )
  
}
export default favourite