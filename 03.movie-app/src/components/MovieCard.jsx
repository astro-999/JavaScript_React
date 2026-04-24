import "../css/MovieCard.css"

function MovieCard({ movie }) {
  function onfavoriteClick() {
    alert(`You clicked on ${movie.title}`);
  }
  return (
    <div className="movie-card">
        <div className="movie-poster"></div>
            <div className="movie-title">
                {movie.title}
                <img src={movie.url} alt={movie.title} />
                <div className=" movie-overlay">
                <button className="favorite-btn" onClick={onfavoriteClick}>
                    ❤️
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>

        </div>
    </div>
  );
}

export default MovieCard;
